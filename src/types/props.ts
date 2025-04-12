import { TSortKey } from '@/types/sortkey';
import {Country} from './country';

export interface Props {
  rowItem: Country[];
  sortCol: TSortKey;
}