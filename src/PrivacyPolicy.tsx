export default function PrivacyPolicy() {
  const sections = [
    {
      title: "個人情報とは",
      content: (
        <p>
          本ポリシーにおける「個人情報」、「個人データ」および「本人」の用語の定義は、個人情報の保護に関する法律（平成15年法律第57号）に準拠します。
        </p>
      ),
    },
    {
      title: "個人情報取得",
      content: (
        <div>
          {[
            "株式会社フラットTAIL（以下「当社」といいます。）は、当社が運営するサービスの利用者（以下「サイト利用者」といいます。）に対し、関連情報や支援サービス（以下「本サービス」といいます。）を提供する過程で、適法かつ適正に個人情報を取得します。",
            "個人情報の提供は任意ですが、必要な情報が提供されない場合、本サービスの全部または一部をご利用いただけない場合があります。",
          ].map((text, i) => (
            <div key={i} className={i === 0 ? "mb-3" : ""}>
              <span className="mr-1">({i + 1})</span>
              {text}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "個人情報の利用目的・第三者提供について",
      content: (
        <div>
          {[
            <>
              当社は、以下の目的でサイト利用者の個人情報を利用します。
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>本サービスの提供、運営</li>
                <li>登録、申込、注文等の確認</li>
                <li>サービス関連情報の提供</li>
                <li>サービス改善のためのアンケート実施</li>
                <li>メール配信等のお知らせ</li>
                <li>イベント・セミナーの案内と連絡</li>
                <li>プレゼント等の発送</li>
                <li>当社や提携先の商品・サービスの案内</li>
                <li>アフターサービスやお問い合わせ対応</li>
                <li>その他当社サービス全般の案内や分析、内部管理</li>
              </ul>
            </>,
            <>
              以下の場合を除き、個人情報を第三者に提供しません。
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>本人の同意がある場合</li>
                <li>法令に基づく開示要請がある場合</li>
                <li>イベント等主催者への提供</li>
                <li>業務委託に伴う提供</li>
                <li>権利行使が必要な場合</li>
                <li>事業承継に伴う提供</li>
                <li>提携先への提供</li>
                <li>提携業者からの情報提供に必要な場合</li>
                <li>その他法令で認められる場合</li>
              </ul>
            </>,
            "退会後も、別途定める期間は個人情報を保有する場合があります。",
          ].map((item, i) => (
            <div key={i} className={i !== 2 ? "mb-3" : ""}>
              <span className="mr-1">({i + 1})</span>
              {item}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "第三者への提供の詳細",
      content: (
        <>
          <ul className="list-disc list-inside ml-4">
            <li>
              提供項目：氏名、住所、メールアドレス、性別、年齢、電話番号等
            </li>
            <li>提供手段：暗号化またはパスワード付きデータでの送信</li>
            <li>提供先：当社と提携する企業、業者等</li>
            <li>取扱契約：守秘義務契約または利用規約の遵守を義務付け</li>
          </ul>
          <p className="mt-1">
            ※ 電話番号はLINE社の通知メッセージ機能で利用される可能性があります。
          </p>
        </>
      ),
    },
    {
      title: "個人情報の開示・訂正・削除について",
      content: (
        <p>
          サイト利用者は、当社に対して個人情報の開示・訂正・削除等を法令に基づき請求できます。詳細は当社Webサイトのプライバシーポリシーをご確認のうえ、以下の連絡先までご連絡ください。
        </p>
      ),
    },
    {
      title: "外部委託について",
      content: (
        <p>
          個人情報の処理を外部に委託する場合は、十分な保護水準を持つ委託先を選定し、機密保持契約を締結の上で行います。
        </p>
      ),
    },
    {
      title: "個人情報の管理について",
      content: (
        <p>
          当社は、不正アクセス、漏洩、改ざんなどを防止するため、適切な安全管理措置を継続的に講じます。
        </p>
      ),
    },
    {
      title: "クッキー等による情報収集",
      content: (
        <div>
          {[
            "当社は第三者配信事業者（Google、Facebook、Yahoo等）を通じて広告を表示するため、クッキーや識別子を利用しています。",
            "クッキーとは、サイト利用履歴を保存する機能です。",
            "ブラウザ設定でクッキーを拒否することができますが、機能制限が生じる可能性があります。",
            "外部リンク先のプライバシー保護については各サイトをご確認ください。",
          ].map((text, i) => (
            <div key={i} className={i !== 3 ? "mb-1" : ""}>
              <span className="mr-1">({i + 1})</span>
              {text}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "個人情報保護方針",
      content: (
        <p>
          当社の個人情報保護方針は以下のURLでご確認いただけます。
          <br />
          <a
            href="https://www.flat-tail.co.jp/privacy/"
            className="text-token-main-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.flat-tail.co.jp/privacy/
          </a>
        </p>
      ),
    },
    {
      title: "個人情報に関するお問い合わせ",
      content: (
        <address className="not-italic">
          <span className="font-bold">＜個人情報苦情および相談窓口＞</span>
          <br />
          株式会社フラットTAIL 個人情報相談窓口
          <br />
          〒460-0022 愛知県名古屋市中区金山3丁目8-5 SKYKANAYAMA 7階
          <br />
          Email:{" "}
          <a
            href="mailto:info@flat-tail.co.jp"
            className="text-token-main-700 underline"
          >
            info@flat-tail.co.jp
          </a>
        </address>
      ),
    },
  ];

  return (
    <div className="flex-1 py-10 px-4 bg-token-main-100">
      <div className="max-w-2xl mx-auto bg-white rounded-lg p-4 my-6 text-sm">
        <h1 className="text-xl font-bold mb-4 pb-2 text-[24px] text-token-mono-700">
          プライバシーポリシー
        </h1>
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <section key={idx}>
              <div className="flex gap-2 mb-3">
                <span className="font-bold text-base">{idx + 1}.</span>
                <span className="font-semibold text-base">{section.title}</span>
              </div>
              <div>{section.content}</div>
            </section>
          ))}
        </div>
        <p className="text-xs text-right mt-6 text-token-mono-500">
          最終改定日：2025年5月21日
        </p>
      </div>
    </div>
  );
}
