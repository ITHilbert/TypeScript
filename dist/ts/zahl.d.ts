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
export declare function number_format(number: number, laenge: number, sep: string, th_sep: string): string;
export declare function number_format_de(number: number): string;
/**
 * Formatiert ein DE oder ISO Datum zu Date
 * @param {string|date} datum
 * @return Date
 */
export declare function cdate(datum: any): Date;
export declare function cfloat(zahl: any): number;
