# プロジェクトのシードデータ
projects = [
  {
    title: "FirstApp — RailsのMVCフレームワークを意識したメモ投稿アプリ",
    description: "コントローラ・モデル・ビューの責務分離 / メモCRUD",
    image_url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60",
    github_url: "https://github.com/taiyifuyuan2/first_app",
    live_url: "",
    technologies: "Rails, MVC, CRUD, HTML, CSS",
    category: "Rails",
    featured: true
  },
  {
    title: "PicTweet — Gemを用いたX風の写真投稿アプリ",
    description: "CRUD / 画像投稿 / Gem活用（バリデーション・ページネーション等）",
    image_url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60",
    github_url: "",
    live_url: "",
    technologies: "Rails, Gem, 画像投稿, バリデーション, ページネーション",
    category: "Rails",
    featured: true
  },
  {
    title: "ChatApp — 多対多設計とActiveStorageで画像投稿に対応",
    description: "ユーザー×ルームの多対多 / 画像アップロード（ActiveStorage）",
    image_url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=60",
    github_url: "https://github.com/taiyifuyuan2/chat-app",
    live_url: "",
    technologies: "Rails, 多対多, ActiveStorage, 画像アップロード",
    category: "Rails",
    featured: true
  },
  {
    title: "AjaxApp — FirstAppを非同期通信化したメモ投稿アプリ",
    description: "非同期投稿 / スムーズなUX / 局所的なDOM更新",
    image_url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60",
    github_url: "https://github.com/taiyifuyuan2/ajax_app_rails7",
    live_url: "",
    technologies: "Rails, Ajax, 非同期通信, JavaScript",
    category: "Rails",
    featured: true
  },
  {
    title: "ProtoSpace — これまでの復習を兼ねたコンテンツ投稿アプリ",
    description: "投稿CRUD / バリデーション / 一覧・詳細ビュー",
    image_url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60",
    github_url: "https://github.com/taiyifuyuan2/protospace-46285",
    live_url: "",
    technologies: "Rails, CRUD, バリデーション, 投稿システム",
    category: "Rails",
    featured: true
  },
  {
    title: "FURIMA — 出品・表示・編集・削除・購入に対応するフリマアプリ",
    description: "商品CRUD / 購入フロー / 基本的なEC体験",
    image_url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=60",
    github_url: "https://github.com/taiyifuyuan2/furima-46285",
    live_url: "",
    technologies: "Rails, EC, 商品管理, 購入フロー",
    category: "Rails",
    featured: true
  }
]

projects.each do |project_data|
  Project.find_or_create_by(title: project_data[:title]) do |project|
    project.assign_attributes(project_data)
  end
end

# スキルのシードデータ
skills = [
  {
    name: "Ruby on Rails",
    description: "CRUD / 認証 / Renderデプロイ",
    category: "Backend",
    proficiency: 5,
    icon: "🚀"
  },
  {
    name: "HTML / CSS",
    description: "セマンティクス / レイアウト",
    category: "Frontend",
    proficiency: 4,
    icon: "🎨"
  },
  {
    name: "JavaScript",
    description: "動的UI",
    category: "Frontend",
    proficiency: 4,
    icon: "⚡"
  },
  {
    name: "MySQL",
    description: "正規化 / インデックス",
    category: "Database",
    proficiency: 4,
    icon: "🗄️"
  },
  {
    name: "GitHub",
    description: "PR駆動 / Actions",
    category: "Tools",
    proficiency: 5,
    icon: "📚"
  },
  {
    name: "Design",
    description: "世界観設計 / 色設計",
    category: "Creative",
    proficiency: 5,
    icon: "✨"
  }
]

skills.each do |skill_data|
  Skill.find_or_create_by(name: skill_data[:name]) do |skill|
    skill.assign_attributes(skill_data)
  end
end

puts "シードデータが正常に作成されました！"
puts "プロジェクト: #{Project.count}件"
puts "スキル: #{Skill.count}件"
