import MedalPage from '@/components/pages/MedalPage';
import { Country } from '@/types/country';

export default function MainPage({params}: {params: {sortId: keyof Country}}) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <MedalPage sortId={params?.sortId ?? 'gold'}></MedalPage>
    </div>
  );
};