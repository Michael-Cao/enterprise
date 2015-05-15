(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/ko-KR', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('ko-KR', {
    //layout/language
    language: 'ko',
    englishName: 'Korean (Korea)',
    nativeName: '한국어 (대한민국)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'seperator': '. ', //Infered
                   'short': 'yyyy. M. d.', //use four digit year
                   'medium': 'yyyy. M. d.',
                   'long': 'yyyy년 M월 d일',
                   'full': 'yyyy년 M월 d일 EEEE',
                   'datetime': 'yyyy. M. d. a h:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
         abbreviated: ['일', '월', '화', '수', '목', '금', '토']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        abbreviated: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'a h:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['오전', '오후']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: '₩', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '¤#,##0.00',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      minusSign: '-',
      decimal: '.',
      group: ','
    },
    //Resx - Approved By Translation Team
    messages: {
      'Required': {id: 'Required', value: '필수', comment: 'indicates a form field is manditory'},
      'SetTime': {id: 'SetTime', value: '시간 설정', comment: 'button text that inserts time when clicked'},
      'Today': {id: 'Today', value: '오늘', comment: 'refering to today on a calendar'},
      'Hours': {id: 'Hours', value: '시간', comment: 'the hour portion of a time'},
      'Minutes': {id: 'Minutes', value: '분', comment: 'the minutes portion of a time'},
      'Period': {id: 'Period', value: '기간', comment: 'the am/pm portion of a time'},
      'UseArrow': {id: 'UseArrow', value: '. 선택 화살표 키를 사용하여.', comment: 'Instructional comments for screen readers'},
      'Loading': {id: 'Loading', value: '로드', comment: 'Text below spinning indicator to indicate loading'}
    }
  });
}));
