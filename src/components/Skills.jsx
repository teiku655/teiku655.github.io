function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>

        {/* 業務経験 */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">業務経験（約5年）</h3>
          <p className="text-gray-700 mb-4">
            約5年間、Webアプリケーションの開発・運用に全般的に携わり、フロントエンドからネットワークまで、様々な技術領域に浅く広く触れてきました。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">言語</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Python</li>
                <li>TypeScript</li>
                <li>Go</li>
                <li>Java</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">技術・フレームワーク</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Angular</li>
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>TensorFlow</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Wireshark</li>
                <li>Git</li>
                <li>Cisco IOS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 修士研究 */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">修士研究</h3>
          <p className="text-gray-700 mb-4">
            FPGA、AI、高速計算に関連するテーマで、システム側のプログラミングに取り組みました。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">言語</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>OpenCL</li>
                <li>CUDA</li>
                <li>C</li>
                <li>C++</li>
                <li>Verilog HDL</li>
                <li>Python</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">ツール・ライブラリ</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>PyTorch</li>
                <li>MPI</li>
                <li>OpenMP</li>
                <li>CMake</li>
                <li>Quartus</li>
                <li>ModelSim</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 資格 */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">資格</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>応用情報処理技術者試験</li>
            <li>TOEIC 530点</li>
            <li>サッカー審判 3級</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
