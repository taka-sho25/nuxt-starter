import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export default defineNuxtPlugin(() => {
  dayjs.locale('ja');
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('Asia/Tokyo');

  return {
    provide: {
      dayjs: (value?: string | number | Date) => (value ? dayjs(value).tz() : dayjs().tz()),
    },
  };
});
