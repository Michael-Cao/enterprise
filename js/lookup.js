/**
* Lookup Control
*/

/* start-amd-strip-block */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
/* end-amd-strip-block */

  $.fn.lookup = function(options) {
    'use strict';

    // Settings and Options
    var pluginName = 'lookup',
        defaults = {
          click: null,
          field: 'id',  //Field to return from the array or can be a function
          title: null, //Dialog title or takes the label + Lookup
          buttons: [], //Pass dialog buttons or Cancel / Apply
          options: null,  //Options to pass to the data grid
          beforeShow: null, //Call back before the lookup is opened.
          source: null, //TODO
          modalContent: null, //Custom modal markup
          editable: true, //Can the user type random text in the field
          typeahead: false, // Future TODO
          autoApply: true,
          validator: null //A function that fires to let you validate form items on open and select
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Lookup(element) {
      this.element = $(element);
      this.init();
    }

    var lookupGridId = 'lookup-datagrid';

    // Plugin Methods
    Lookup.prototype = {

      init: function() {
        this.settings = settings;
        this.inlineLabel = this.element.closest('label');
        this.inlineLabelText = this.inlineLabel.find('.label-text');
        this.isInlineLabel = !!this.inlineLabelText.length;
        this.build();
        this.handleEvents();
        this.grid = null;
        this.selectedRows = null;
      },

      // Build the Ui lookup
      build: function() {
         var lookup = this.element;

        //Add Button
        this.icon = $('<span class="trigger" tabindex="-1"><svg class="icon" focusable="false" aria-hidden="true" role="presentation"><use xlink:href="#icon-search-list"/></svg></span>');
        if (this.isInlineLabel) {
          this.inlineLabel.addClass('lookup-wrapper');
        }
        else {
          this.container = $('<span class="lookup-wrapper"></span>');
          lookup.wrap(this.container);
        }

        // this.container = $('<span class="lookup-wrapper"></span>');
        // lookup.wrap(this.container);
        lookup.after(this.icon);

        //Add Masking to show the #
        if (lookup.attr('data-mask')) {
          lookup.mask();
        }

        if (this.element.is(':disabled')) {
          this.disable();
        }

        if (!this.settings.editable) {
          this.element.attr('readonly', 'true').addClass('is-not-editable');
        }
        this.addAria();
      },

      // Add/Update Aria
      addAria: function () {
        var self = this;

        setTimeout(function () {
          var el = self.isInlineLabel ? self.inlineLabelText : $('label[for="'+ self.element.attr('id') + '"]');
          el.append('<span class="audible">' + Locale.translate('UseEnter') + '</span>');
        }, 500);
      },

      //Handle events on the field
      handleEvents: function () {
        var self = this;

        this.icon.on('click.lookup', function (e) {
          self.openDialog(e);
        });

        //Down Arrow opens the dialog in this field
        this.element.on('keyup.lookup', function (e) {
          //If autocomplete open dont open list
          if ($('#autocomplete-list').length > 0) {
            return;
          }

          if (e.which === 40) {
            self.openDialog(e);
          }
        });

      },

      //Create and Open the Dialog
      openDialog: function (e) {
        var self = this,
          canOpen = self.element.triggerHandler('beforeopen');

        if (canOpen === false) {
          return;
        }

        if (self.isDisabled() || (self.isReadonly() && !self.element.hasClass('is-not-editable'))) {
          return;
        }

        if (self.settings.click) {
          self.settings.click(e, this);
          return;
        }

        if (this.settings.beforeShow) {
         var response = function (grid) {
            if (grid) {
              self.createGrid(grid);
            }
            self.createModal();
            self.element.trigger('open', [self.modal, self.grid]);

            if (self.settings.validator) {
              self.settings.validator(self.element, self.modal, self.grid);
            }
            return;
          };

          this.settings.beforeShow(this, response);
          return;
        }

        if (!this.settings.options) {
          return;
        }

        self.createModal();
        self.element.trigger('open', [self.modal, self.grid]);

        self.modal.element.find('.btn-actions').removeClass('is-selected');
        self.modal.element.find('.pager-pagesize').remove();

        self.element.trigger('afteropen', [self.modal, self.grid]);

        if (self.settings.validator) {
          self.settings.validator(self.element, self.modal, self.grid);
        }

      },

      //Overidable function to create the modal dialog
      createModal: function () {
        var self = this,
          content = '<hr><div id="'+lookupGridId+'"></div>',
          labelText = (self.isInlineLabel ? self.inlineLabelText : $('label[for="'+self.element.attr('id')+'"]')).text();

        labelText += ' ' + Locale.translate('Lookup');

        if (this.settings.title) {
          labelText = this.settings.title;
        }

        var settingContent = this.settings.modalContent;
        if (settingContent && settingContent instanceof jQuery) {
          content = settingContent;
          settingContent.show();
        }

        if (settingContent && !(settingContent instanceof jQuery)) {
          content = settingContent;
        }

        var buttons = this.settings.buttons;
        if (this.settings.options && this.settings.options.selectable === 'multiple' && buttons.length === 0 || (!self.settings.autoApply && buttons.length === 0)) {
          buttons = [{
            text: Locale.translate('Cancel'),
            click: function(e, modal) {
              self.element.focus();
              modal.close();
            }
          }, {
            text: Locale.translate('Apply'),
            click: function(e, modal) {
              var selectedRows = self.grid.selectedRows();
              modal.close();
              self.insertRows(selectedRows);
            },
            isDefault: true
          }];
        }

        if (this.settings.options && this.settings.options.selectable === 'single' && buttons.length === 0 && self.settings.autoApply) {
          buttons = [{
            text: Locale.translate('Cancel'),
            click: function(e, modal) {
              self.element.focus();
              modal.close();
            }
          }];
        }

        $('body').modal({
          title: labelText,
          content: content,
          buttons: buttons
        }).off('open').on('open', function () {
          self.createGrid();
          self.element.trigger('afteropen', [self.modal, self.grid]);
        }).off('close').on('close', function () {
          self.element.focus();
        });

        self.modal = $('body').data('modal');

        setTimeout(function () {
          //Placeholder attribute in browsers that do not handle it
          $(self.modal).placeholderPolyfill();
        }, 0);

        // Wait until search field available
        setTimeout(function () {
          $('.modal.is-visible .searchfield').on('keypress.lookup', function (e) {
            if (e.keyCode === 13) {
              return false; // Prevent for closing modal
            }
          });
        }, 300);
      },

      //Overridable Function in which we create the grid on the current ui dialog.
      createGrid: function (grid) {
        var self = this,
          lookupGrid = $('#' + lookupGridId);

        if (grid) {
          lookupGrid = grid;
          lookupGridId = grid.attr('id');
          self.settings.options = grid.data('datagrid').settings;
        }

        if (self.settings.options) {

          if (self.settings.options.selectable === 'single' && self.settings.autoApply) {
            self.settings.options.cellNavigation = false;
            lookupGrid.find('tr').addClass('is-clickable');
          }

          lookupGrid.datagrid(self.settings.options);
        }
        self.grid = lookupGrid.data('datagrid');

        //Mark selected rows
        lookupGrid.off('selected.lookup');
        var val = self.element.val();
        if (val) {
          self.selectGridRows(val);
        }

        if (this.settings.options) {
          lookupGrid.on('selected.lookup', function () {

            if (self.settings.validator) {
              self.settings.validator(self.element, self.modal, self.grid);
            }

            if (self.settings.options.selectable === 'single' && self.settings.autoApply) {
              setTimeout(function () {
                self.insertRows();
                self.modal.close();
              }, 100);
            }

          });
        }

      },

      //Given a field value, select the row
      selectGridRows: function (val) {
        var self = this,
          selectedId = val;

        if (!val) {
          return;
        }

        //Multi Select
        if (selectedId.indexOf(',') > 1) {
          var selectedIds = selectedId.split(',');

          for (var i = 0; i < selectedIds.length; i++) {
            self.selectRowByValue(self.settings.field, selectedIds[i]);
          }
          return;
        }

        self.selectRowByValue(self.settings.field, selectedId);
      },

      //Find the row and select it based on select value / function / field value
      selectRowByValue: function(field, value) {
        if (!this.settings.options) {
          return;
        }

        var self = this,
          data = this.settings.options.dataset,
          selectedRows = [];

        for (var i = 0; i < data.length; i++) {
          if (typeof self.settings.match === 'function') {
            if (self.settings.match(value, data[i], self.element, self.grid)) {
              selectedRows.push(i);
            }

            continue;
          }

          if (data[i][field] == value) {  // jshint ignore:line
            selectedRows.push(i);
          }
        }

        if (this.grid) {
          this.grid.selectedRows(selectedRows);
        }
      },

      //Get the selected rows and return them to the UI
      insertRows: function () {
        var self = this,
          value = '';

        self.selectedRows = self.grid.selectedRows();

        for (var i = 0; i < self.selectedRows.length; i++) {
          var currValue = '';

          if (typeof self.settings.field === 'function') {
            currValue = self.settings.field(self.selectedRows[i].data, self.element, self.grid);
          } else {
            currValue = self.selectedRows[i].data[self.settings.field];
          }

          value += (i !== 0 ? ',' : '') + currValue;
        }

        self.element.val(value).trigger('change', [self.selectedRows]);
        self.element.focus();
      },

      //Enable the field
      enable: function() {
        this.element.prop('disabled', false).prop('readonly', false);
        this.element.parent().removeClass('is-disabled');
      },

      //Disable the field
      disable: function() {
        this.element.prop('disabled', true);
        this.element.parent().addClass('is-disabled');
      },

      //Make the field readonly
      readonly: function() {
        this.element.prop('readonly', true);
      },

      //Check if the field is disabled
      isDisabled: function() {
        return this.element.prop('disabled');
      },

      //Check if the field is readonly
      isReadonly: function() {
        return this.element.prop('readonly');
      },

      // Remove added markup and events
      destroy: function() {
        $.removeData(this.element[0], pluginName);
        this.element.off('click.dropdown keypress.dropdown');
      }
    };

    // Initialize the plugin once
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        instance.settings = $.extend({}, defaults, options);
      } else {
        instance = $.data(this, pluginName, new Lookup(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
