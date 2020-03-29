export class StringFormatService {
  splitWordsByWidth(text: string, width: number): string[] {
    const splitRegex = new RegExp(
      `(?![^\\n]{1,${width}}$)([^\\n]{1,${width}})\\s`,
      'g',
    );
    const splitText = this.replaceString(text, splitRegex, '$1\n');
    return this.splitData(splitText);
  }

  splitData(data: string, separator = '\n'): string[] {
    return data.split(separator);
  }

  replaceString(
    string: string,
    stringToReplace: string | RegExp,
    replaceValue: string,
  ) {
    return string.replace(stringToReplace, replaceValue);
  }
}
