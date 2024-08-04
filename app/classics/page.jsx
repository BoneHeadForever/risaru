import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Geri Bildirim'
};

const explainer = `
Luritz
Merhaba! Ben Luritz, tasarım ve kullanıcı deneyimi konusunda uzmanlaşmış bir profesyonelim. Şıklığı ve işlevselliği bir araya getirerek projelerinizi görsel olarak mükemmel hale getiriyorum.

Ne Yapıyorum?
Tasarım ve kullanıcı deneyimi odaklı projeler geliştiriyorum. Amacım, estetik ve işlevsel açıdan mükemmel sonuçlar elde etmek ve kullanıcılarınızın beklentilerini karşılamaktır.

Vizyonum
Tasarım ve estetik anlayışımı kullanarak, projelerinizda fark yaratmak ve kullanıcı deneyimini en üst düzeye çıkarmak.

Misyonum
Kaliteli ve etkili tasarımlar sunarak projelerinizi başarılı kılmak. Her projede yenilikçi ve yaratıcı çözümler sunmak için çalışıyorum.
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
