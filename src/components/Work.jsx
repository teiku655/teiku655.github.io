function Work() {
  return (
    <section id="work" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Work</h2>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">このポートフォリオ</h3>
          <p className="text-gray-700 mb-4">
            React, Vite, Tailwind CSS を使用して作成しました。
          </p>
          <a
            href="https://github.com/teiku655/teiku655.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            ソース
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
