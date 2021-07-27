/**
 * Formatiert ein Zahl
 * Quelle: http://www.brain4.de/programmierecke/js/numberFormat.php
 *
 * @param {float} number Die Zahl selber
 * @param {int} laenge  Anzahl Zahlen nach dem Komma
 * @param {string} sep  Seperator
 * @param {string} th_sep Tausenderseperator
 * @returns {string} Formatierte Zahl
 */
export function number_format(
  number: number,
  laenge: number,
  sep: string,
  th_sep: string
): string {
  let str_number: string;
  let arr_int: any[];
  let nachkomma: string;
  let i: number;
  let j: number;
  let Begriff: string;
  let Extrakt: string;
  let str_first: string;

  number = Math.round(number * Math.pow(10, laenge)) / Math.pow(10, laenge);
  str_number = number + '';
  arr_int = str_number.split('.');
  if (!arr_int[0]) arr_int[0] = '0';
  if (!arr_int[1]) arr_int[1] = '';
  if (arr_int[1].length < laenge) {
    nachkomma = arr_int[1];
    for (i = arr_int[1].length + 1; i <= laenge; i++) {
      nachkomma += '0';
    }
    arr_int[1] = nachkomma;
  }
  //if (th_sep != "" && arr_int[0].length > 3) {
  if (
    th_sep != '' &&
    ((arr_int[0].length > 3 && arr_int[0] > 0) ||
      (arr_int[0].length > 4 && arr_int[0] < 0))
  ) {
    Begriff = arr_int[0];
    arr_int[0] = '';
    for (j = 3; j < Begriff.length; j += 3) {
      Extrakt = Begriff.slice(Begriff.length - j, Begriff.length - j + 3);
      arr_int[0] = th_sep + Extrakt + arr_int[0] + '';
    }
    str_first = Begriff.substr(
      0,
      Begriff.length % 3 == 0 ? 3 : Begriff.length % 3
    );
    arr_int[0] = str_first + arr_int[0];
  }
  return arr_int[0] + sep + arr_int[1];
}

export function number_format_de(number: number): string {
  return number_format(number, 2, ',', '.');
}

/**
 * Formatiert ein DE oder ISO Datum zu Date
 * @param {string|date} datum
 * @return Date
 */
export function cdate(datum: any): Date {
  if (datum instanceof Date) {
    return datum;
  } else if (typeof datum === 'string') {
    //Prüfen ob Punkt drin ist
    if (datum.indexOf('.') > 0) {
      var tmp = datum.split('.');
      datum =
        tmp[2] +
        '-' +
        ('00' + tmp[1]).slice(-2) +
        '-' +
        ('00' + tmp[0]).slice(-2);
      return new Date(datum);
    } else if (datum.indexOf('-') > 0) {
      var tmp = datum.split('-');
      datum =
        tmp[0] +
        '-' +
        ('00' + tmp[1]).slice(-2) +
        '-' +
        ('00' + tmp[2]).slice(-2);
      return new Date(datum);
    }
  } else if (isNaN(datum)) {
    datum = '0000-00-00';
  } else if (datum === undefined) {
    datum = '0000-00-00';
  } else if (datum === null) {
    datum = '0000-00-00';
  }

  return new Date(datum);
}

export function cfloat(zahl: any): number {
  //console.log('cfloat: ' + zahl + ' - ' + typeof zahl);
  if (typeof zahl == 'string') {
    zahl = zahl.replace('.', '');
    zahl = zahl.replace(',', '.');

    zahl = parseFloat(zahl);
    if (isNaN(zahl)) {
      zahl = 0;
    }
  } else if (isNaN(zahl)) {
    return 0;
  } else if (zahl === undefined) {
    return 0;
  } else if (zahl === null) {
    return 0;
  }
  return zahl;
}
