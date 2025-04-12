'use client';

import { useEffect, useState } from 'react';
import MedalTable from '@/components/molecules/Table';
import { fetchStudents } from '@/lib/student.api';
import {Country} from '@/types/country';

export default function MedalPage({ sortId } : {sortId: keyof Country}) {
  const [countries, setCountries] = useState<Country[]>([]);
  
  useEffect(() => {
    fetchStudents().then(setCountries, () => setCountries([]));
  },[]);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <MedalTable rowItem={countries} sortCol={sortId ?? 'gold'}></MedalTable>
    </div>
  );
};