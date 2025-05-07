function Career() {
  return (
    <section id="career" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Career</h2>

        <ul className="space-y-6">
          <li>
            <p className="text-sm text-gray-500">2018年3月</p>
            <h3 className="text-lg font-semibold text-gray-800">法学部 卒業</h3>
          </li>

          <li>
            <p className="text-sm text-gray-500">2018年4月</p>
            <h3 className="text-lg font-semibold text-gray-800">SIer企業に就職（ソフトウェアエンジニア）</h3>
          </li>

          <li>
            <p className="text-sm text-gray-500">2018年4月 〜 2019年9月</p>
            <h3 className="text-lg font-semibold text-gray-800">データ活用系Webアプリケーション開発</h3>
            <p className="text-gray-700">
              UI改善、画像アップロード等の機能を開発（全工程、TypeScript、Python）。
            </p>
          </li>

          <li>
            <p className="text-sm text-gray-500">2019年10月 〜 2020年9月</p>
            <h3 className="text-lg font-semibold text-gray-800">ネットワーク製品提案</h3>
            <p className="text-gray-700">
              顧客要件、標準仕様等を整理し提案資料を作成。
            </p>
          </li>

          <li>
            <p className="text-sm text-gray-500">2020年10月 〜 2021年3月</p>
            <h3 className="text-lg font-semibold text-gray-800">検査用アプリケーション開発</h3>
            <p className="text-gray-700">
              画面遷移、データベース、スレッド並列化等の機能を開発（全工程、JavaScript、Java）。
            </p>
          </li>

          <li>
            <p className="text-sm text-gray-500">2021年4月 〜 2022年3月</p>
            <h3 className="text-lg font-semibold text-gray-800">ネットワーク試験用アプリケーション開発・運用</h3>
            <p className="text-gray-700">
              パケット分析試験、システム、ネットワーク構築等によるシステム導入等を実施（Wireshark、Cisco IOS、Docker、Kubernetes）。
            </p>
          </li>

          <li>
            <p className="text-sm text-gray-500">2022年4月 〜 2023年1月</p>
            <h3 className="text-lg font-semibold text-gray-800">ネットワーク装置の品質検査</h3>
            <p className="text-gray-700">
              検査、検査要件の調整、検査システムの構築（シェルスクリプト）。
            </p>
          </li>
          
          <li>
            <p className="text-sm text-gray-500">2023年4月 ～ 2025年3月</p>
            <h3 className="text-lg font-semibold text-gray-800">情報理工修士課程に進学</h3>
            <p className="text-gray-700">
              FPGA・HPC・AIに関する研究を実施。国際会議で発表予定（OpenCL、C++、Python、Verilog HDL）。
            </p>
          </li>

          <li>
            <p className="text-sm text-gray-500">2025年4月 ～ 現在</p>
            <h3 className="text-lg font-semibold text-gray-800">就職活動中</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Career;
