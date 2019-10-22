// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('la-IT', {
  // layout/language
  language: 'la',
  englishName: 'Latin (Italy)',
  nativeName: 'Latine (Italia)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '/', // Infered
      timeSeparator: ':',
      short: 'dd/MM/yyyy', // use four digit year
      medium: 'dd/MMM/yyyy',
      long: 'dd MMMM yyyy',
      full: 'EEEE d MMMM yyyy',
      month: 'd MMMM',
      year: 'MMMM yyyy',
      timestamp: 'HH:mm:ss',
      datetime: 'M/d/yyyy HH:mm'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['Solis', 'Lunae', 'Solis', 'Mercurii', 'Lovis', 'Veneris', 'Saturni'],
      abbreviated: ['So', 'Lu', 'So', 'Me', 'Lo', 'Ve', 'Sa'],
      narrow: ['S', 'L', 'S', 'M', 'L', 'V', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['Ianuarii', 'Februarii', 'Martius', 'Aprilis', 'Maii', 'Iunii', 'Iulii', 'August', 'Septembris', 'Octobris', 'November', 'Decembris'],
      abbreviated: ['ian', 'feb', 'mar', 'apr', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'nov', 'dec']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['AM', 'PM']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: '€',
  currencyFormat: '### ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '###%',
    percentSuffix: '%',
    percentPrefix: '',
    minusSign: '-',
    decimal: ',',
    group: '.'
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright & exemplum; Similiter finis {0}. Omnia iura reservantur. Verbum consilio et quae hoc loco enuntiata sunt trademark marcas set et / vel a registered trademark similiter finis et / vel Aliquam, et subsidiaries. Omnia iura reservantur. Morbi in hac proprietate ceteris trademarks arcu' },
    Actions: { id: 'Actions', value: 'actus', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Praeter', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Addere', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'omments addere', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Novum addere Omnes Tab', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Administrativus discede', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Crea Advanced Filter', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Erecti', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Nuntio erecti (s) on page', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Omnis', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Cuncti loci inuenti præbeantur enim', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Conlinis profundo', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Conlineare vestibulum', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Plena', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Amethystus', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Applicare', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Menu', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Allega', comment: 'Attach' },
    Available: { id: 'Available', value: 'Available', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Caeruleum', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Colore sfondo', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Inter', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Acta quote', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Audax', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Aggiunto ai segnalibri', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Aggiungi ai segnalibri', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Breadcrumb', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Pasco', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Telum album', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Calendario', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Fotocamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Annulla', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'De Caps Obfirmo', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Carrello', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Centra', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Personae reliquit {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'De Moribus comitem maximum', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: 'Mutata sagitta claves ad uti lobortis', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'View Mutare', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Casella di controllo', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Sedatus', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Patet', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Annulla filtro', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Serena Figuram', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(F Electio)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Horologium', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Prope', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Cliccabile nell\'editor', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Exemplum', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Ruina', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Comprimi barra applicazioni', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Columnas', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Commenti', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Feriae Company', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Pars', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Componere', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Perficitur', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Confírma', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Confírma nuntius (s) on page', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Cookies potestatem', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Succidite', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Genus css', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Taglia', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Data', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Dies', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Dies', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: 'Scaduto da {0} giorni', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} Available diebus', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'delere', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Fabrica', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'furorem divide in Horizontally', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'documento', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'Tempus off Discretionary', value: 'Ferie/Permessi discrezionali', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Row mutata', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Visualizza dettagli', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Sursum Exercatio', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Tellus', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'non continet', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'non ideo perficitur', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'An non Riangula aequalia', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Cum non incipiat', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'descendere', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Download', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Effingo', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Aut non lego Lego aut', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Cum terminum', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Intra comment ... hic', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Errore', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Genus tabellae non licet', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Exceeded lima amplitudo terminus', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'liceat files Exceeded maximum terminum', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'error nuntius (s) on page', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Electronicus Nuntium non valet', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smaragdus', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Espandi', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Espandi barra applicazioni', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Espandi/Comprimi', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'quod Import Spreadsheet', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Recensere', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Pares', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'res', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Exitus View Full', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Patefacio', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Patefacio ut Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'ventus', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'File Upload. Intra Press Pasco est a lima', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'filter campo', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'filter', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Primum Page', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Cartella', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'Ex', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Visualizzazione a schermo intero', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'progredi', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'priorem', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Descende', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Vai su', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Ite', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafite', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Pares maiori', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Quantocumque', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Major', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Horae', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'HoraeOre', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Res gestae divi Tre', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Res gestae divi quattuor', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Summum', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'domus', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Visualizzazione HTML', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'imago', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Importa', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Info', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Information nuntius (s) on page', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'In corso', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Inserere', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Insert ceratas ancora puppes,', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Insert imago', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Insert collegamento', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Insert URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Italica', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Date invalida', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Aliquam et tempus', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Scorte', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'In dolor ', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Numquid vacuum', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Non vana', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Item lectus', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Conlinis Center', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Conlinis Umbra', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Vox Conlinisa', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Parola chiave', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Duc', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Ultima pagina', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Sinistram', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Legenda', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Pares aut minus', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'minus', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Link', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Lond', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Lond...', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'locus', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'clausa', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Ex Log', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Ricerca', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'ultimum', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Mail', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'pin', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Ingrandisci', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Medicum', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Medium', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Menu', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Condividi con Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'minuta', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'magna', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Meno', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Dispositivo portatile', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'mense', comment: 'As in a date month' },
    More: { id: 'More', value: 'Ultra...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Magis actiones', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Movere ad sinistram', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Movere dextera', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', modificato', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Nuovo', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'novum documento', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'novum item', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'novum Fenestra', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'altera', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Altera Pagina ', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Mense successivo', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Nulla', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Nulla Data Available', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'non available notitia', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'non available notitia', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Nihil', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Non Results', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'normalis', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'notas', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Non Lego', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Elenco numerato', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'OK', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Patefacio / Back / Close', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Apri/Chiudi', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Operating Ratio', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Inserisci/Rimuovi elenco numerato', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'pagina ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'pagina {0} I {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Tu es currently in pagina: ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Assenze retribuite', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Crustulum', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>La password deve soddisfare i seguenti requisiti</strong><br>Avere una lunghezza minima di 10 caratteri<br>Includere almeno un carattere maiuscolo<br>Includere almeno un carattere minuscolo<br>Contenere un carattere speciale<br>Non contenere il nome utente<br>Non essere una password già utilizzata in precedenza<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Password oportet inserere', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'apicem', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'eviewray', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Personalize columnarum', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Consilium', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Piattaforma', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Periodum', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'deprimunt sagitta eligere diem', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Shift deprime F10 aperire context + menu.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Suspendisse', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Suspendisse mense', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Suspendisse Pagina', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Print', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'dolor', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} Records per paginam', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'redo', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Reorder fusilia', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Aggiorna', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Tempus off Request', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Reddere', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Reddere', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'ut Reset Default', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Risultati', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Risultati', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Vox Conlinis', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Vox Conlinis', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'recte', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Ruoli', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Row altitudo', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'pyropo', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Curre Filter', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'idem Fenestra', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Servo', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Salvum View Current', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Seruasse Views', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Schedule', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Secunda', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Quaerere', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Scrutamini In Folder', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Quaerere Folder', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Quaerere List', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Lectus', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Select a die', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Selezionato', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Omnia Select', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Mitte', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Tempus constitue', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Occasus', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Brevis', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowEvent: { id: 'ShowEvent', pretii: 'Partium Monstrare ' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Mostra riga filtro', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Minus Show', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Mostra più elementi', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Infirmatur tempus', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Rasa', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Natus est {0} {I}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Diapositive {0} e {1} di {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Palpate est', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Ansam retinere omnium maximum range', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Minimum range ansam retinere omnium', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Passa a contenuto principale', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Stato', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Cum incipit', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} de {1} gradibus Completur', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Percutite per', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Sort caelum', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Sort descendens', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Sort Est', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Sursum Sort', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Pedice', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Apice', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Schede...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Tacitus', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Alta', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Scopum', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Evento team', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Test su valori predefiniti lingua', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Colore testo', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Iacta Extraho quod Lima ut upload', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Iacta Extraho quod aut <span class = "hyperlink"> Select Files </ span> ut uploade', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Cancel discas file hoc', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Close error hoc', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Chiudi errore', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Vicis', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Ut', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Hodie', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Toggle Litterae', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Res gestae divi Toggle III', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Res gestae divi IV Toggle', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Toggle Italica Text', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Toggle Intimum efferentes Text', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Barra degli strumenti', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Top Conlinis', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Summa', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Totalis', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Arbor Collapse', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Expand lignum', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Callaina', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Est', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Upcoming Lorem', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Tempus off Upcoming', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Carica', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Data non disponibile', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Sottolineato', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'reserantem', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Intimum efferentes', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Inserisci/Rimuovi elenco puntato', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Praeter', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Uti sagitta claves eligere.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Nec intrabit usque ad uti sagitta lookup.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Utente', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Profilo utente', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Versione IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Allineamento verticale al centro', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Visum Radix', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Visum View', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'septem', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Anni', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Ita', comment: 'On a dialog button' }
  }
});
