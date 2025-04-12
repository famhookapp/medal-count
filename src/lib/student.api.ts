import {Country} from '@/types/country';
import {medalData} from './medals-data';
export async function fetchStudents() : Promise<Country[]> {
    return new Promise ((resolve, reject) => {
        try {
            const countryMedalData = medalData.map(country => ({
                ...country,
                total: (country?.gold  + country?.silver + country?.bronze)
            }));
            resolve(countryMedalData);
        } catch (error) {
            reject({code: 'ERR-01', message: 'Error while fetching data', error});
        }
    });
}