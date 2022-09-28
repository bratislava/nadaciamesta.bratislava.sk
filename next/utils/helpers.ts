import { convert, ZonedDateTime } from '@js-joda/core';

export const formatKiloBytes = (kilobytes: number) => {
  return formatBytes(kilobytes * 1024);
};

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(decimals))} ${sizes[i]}`;
};

export const getLocalDate = (dateString: string) => {
  return convert(ZonedDateTime.parse(dateString))
    .toDate()
    .toLocaleDateString('sk-SK', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
};

export const parseQueryString = (param: string | string[]) => {
  if (typeof param === 'string') {
    return param;
  }
  return parseQueryString(param[0]);
};

export const parseQueryArray = (param: string | string[]) => {
  if (typeof param === 'string') {
    return param.split(',');
  }
  return parseQueryArray(param[0]);
};
