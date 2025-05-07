import teLogo from '../../public/te-logo.png';

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About</h2>

        <p className="text-gray-700 text-lg mb-6">
          法学部卒からシステムエンジニアに就職し、約5年働いた後、情報理工修士で学び直しました。<br />
          2025年3月に修了し、現在、リモートで働ける会社を探して就活中です。<br />
          得意分野は、HPCやFPGAやAIです。
        </p>

        {/* ulリストと画像の横並び */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
          {/* プロフィールリスト */}
          <ul className="text-gray-700 text-base space-y-2 sm:w-2/3">
            <li><strong>名前：</strong> ていく</li>
            <li><strong>出身：</strong> 兵庫県</li>
            <li><strong>住所：</strong> 埼玉県</li>
            <li><strong>生年：</strong> 1994年</li>
            <li><strong>趣味：</strong> アニメ・お笑い鑑賞、国内旅行、社会人サッカー</li>
          </ul>

          {/* 画像 */}
          <div className="mt-6 sm:mt-0 sm:w-1/3 flex justify-center">
            <img
              src={teLogo}
              alt="ていくロゴ"
              className="w-32 h-32 rounded-full border-4 border-white shadow"
            />
          </div>
        </div>

        {/* SNSリンク */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/teiku655"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://cdn.simpleicons.org/x/000000"
              alt="X"
              className="w-8 h-8"
            />
          </a>

          <a
            href="https://github.com/teiku655"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://cdn.simpleicons.org/github/000000"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
