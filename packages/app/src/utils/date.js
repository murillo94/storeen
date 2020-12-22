import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export const formatDateToString = iso =>
  iso && dayjs(iso).locale('pt-br').format('MMM DD, YYYY');

export const formatDate = iso => iso && dayjs(iso).format('DD/MM/YYYY');
