import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Hakkımda'
};

const explainer = `
Merhaba! Ben Luritz, Roblox dünyasında güvenilir ve kaliteli itemler sunan bir satıcıyım. Kullanıcı dostu ve güvenli bir alışveriş deneyimi sağlamak için buradayım.

Ne Sunuyorum?
Roblox oyununda ihtiyaç duyduğunuz itemleri güvenilir bir şekilde sunuyorum. Her ürünüm, oyuncuların beklentilerini karşılayacak kalitede ve güvenli bir alışveriş deneyimi sunar.

Vizyonum:
Roblox topluluğuna değerli ve güvenilir ürünler sunarak, oyun deneyiminizi geliştirmek. Her zaman müşteri memnuniyetini ön planda tutarak, sorunsuz ve güvenilir bir hizmet sunmayı amaçlıyorum.

Misyonum:
Kullanıcılarımıza yüksek kaliteli ve güvenilir Roblox itemleri sunmak. Alışveriş sürecinizin her aşamasında size en iyi hizmeti vermek için çalışıyorum.
`;

export default async function Page() {
    return (
        <>
            <h1>Netlify Classics</h1>
            <Markdown content={explainer} />
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}
