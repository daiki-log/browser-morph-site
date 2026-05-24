const TRANSLATIONS = {
  ja: {
    /* ── Nav ── */
    "nav.home": "ホーム",
    "nav.phases": "フェーズ一覧",

    /* ── Hero ── */
    "hero.eyebrow": "Electron Puzzle Game",
    "hero.title": "MORPH BROWSER",
    "hero.title.sub": ": 17 Phases",
    "hero.subtitle":
      "ブラウザウィンドウ自体がパズル。ズーム・移動・リサイズ。ボールをゴールへ導け。",
    "hero.cta.phases": "フェーズ一覧を見る",
    "hero.cta.about": "ゲームについて",

    /* ── What is ── */
    "what.label": "ABOUT",
    "what.title": "このゲームについて",
    "what.desc":
      "Morph Browser は、ブラウザウィンドウの位置・サイズ・ズーム操作してボールをゴールへ運ぶ、全51 + αステージのパズルゲームです。フェーズが進むにつれ、思いもよらない操作が求められる。",

    /* ── Features ── */
    "features.label": "FEATURES",
    "features.title": "独自のメカニクス",
    "features.desc": "ステージごとに異なるルールがプレイヤーを翻弄する。",
    "feat.1.name": "ウィンドウ移動",
    "feat.1.desc": "ウィンドウ自体を動かしてボールを捕捉・誘導する。",
    "feat.2.name": "ズーム操作",
    "feat.2.desc": "Ctrl+/-でズームを合わせて次元を共鳴させる。",
    "feat.3.name": "重力変化",
    "feat.3.desc": "画面の4方向に重力が変化し、物理法則が変わる。",
    "feat.4.name": "ダーク/ライトモード",
    "feat.4.desc": "テーマ切り替えがゲームに直結する。",
    "feat.5.name": "タイムアタック",
    "feat.5.desc": "制限時間内にクリアしないとリセットされる。",
    "feat.6.name": "透明ボール",
    "feat.6.desc": "ボールが消えてもミニマップを頼りに進む。",
    "feat.7.name": "リサイズ制約",
    "feat.7.desc": "ウィンドウを指定のサイズに合わせて空間を再構築。",
    "feat.8.name": "タイトルヒント",
    "feat.8.desc": "タイトルバーに隠された答えを読み解く。",

    /* ── Phases mini ── */
    "phases.label": "PHASES",
    "phases.title": "17のフェーズ",
    "phases.desc":
      "3ステージ×17フェーズ＝51ステージ + α。フェーズが進むたびに新たな操作ルールが現れる。",
    "phases.cta": "すべてのフェーズを見る",

    /* ── Footer ── */
    "footer.copy": "© 2026 Morph Browser",
    "footer.github": "GitHub",

    /* ── Phases page ── */
    "phases.page.label": "ALL PHASES",
    "phases.page.title": "フェーズ一覧",
    "phases.page.desc":
      "各フェーズをクリックすると詳細と攻略ヒントを見ることができます。",

    /* ── Phase detail ── */
    "phase.tips.title": "攻略のコツ",
    "phase.back": "フェーズ一覧へ",
  },

  en: {
    /* ── Nav ── */
    "nav.home": "Home",
    "nav.phases": "Phases",

    /* ── Hero ── */
    "hero.eyebrow": "Electron Puzzle Game",
    "hero.title": "MORPH BROWSER",
    "hero.title.sub": ": 17 Phases",
    "hero.subtitle":
      "The browser window IS the puzzle. Manipulate zoom, position, resize, and OS settings to guide the ball to the goal.",
    "hero.cta.phases": "View All Phases",
    "hero.cta.about": "What is this?",

    /* ── What is ── */
    "what.label": "ABOUT",
    "what.title": "What is this game?",
    "what.desc":
      "Morph Browser is a puzzle game with 51 + α stages where you manipulate the browser window's position, size, zoom level, and OS settings to carry a ball to its goal. As phases progress, increasingly unexpected operations are required.",

    /* ── Features ── */
    "features.label": "FEATURES",
    "features.title": "Unique Mechanics",
    "features.desc":
      "Each stage introduces different rules that challenge the player in unexpected ways.",
    "feat.1.name": "Window Movement",
    "feat.1.desc": "Move the window itself to capture and guide the ball.",
    "feat.2.name": "Zoom Control",
    "feat.2.desc":
      "Use Ctrl+/- to match the zoom level and resonate dimensions.",
    "feat.3.name": "Gravity Shift",
    "feat.3.desc":
      "Gravity can face any of 4 directions, changing all physics.",
    "feat.4.name": "Dark/Light Mode",
    "feat.4.desc": "Toggling your OS theme directly affects the game state.",
    "feat.5.name": "Time Attack",
    "feat.5.desc": "Fail to clear within the time limit and it resets.",
    "feat.6.name": "Invisible Ball",
    "feat.6.desc": "The ball disappears — navigate using only the minimap.",
    "feat.7.name": "Resize Constraints",
    "feat.7.desc":
      "Resize the window to exact dimensions to reconstruct space.",
    "feat.8.name": "Title Hint",
    "feat.8.desc": "Decode the answer hidden in the window title bar.",

    /* ── Phases mini ── */
    "phases.label": "PHASES",
    "phases.title": "17 Phases",
    "phases.desc":
      "3 stages × 17 phases = 51 + α total stages. Each phase imposes a new rule of operation.",
    "phases.cta": "See All Phases",

    /* ── Footer ── */
    "footer.copy": "© 2026 Morph Browser",
    "footer.github": "GitHub",

    /* ── Phases page ── */
    "phases.page.label": "ALL PHASES",
    "phases.page.title": "All Phases",
    "phases.page.desc":
      "Click any phase card to view details and strategy tips.",

    /* ── Phase detail ── */
    "phase.tips.title": "Strategy Tips",
    "phase.back": "Back to Phases",
  },
};

/* ── Phase Data ───────────────────────────────────────────── */
const PHASE_DATA = [
  {
    id: 1,
    name: "Containment",
    difficulty: 2,
    lore: "核は動かない。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-01 00:00:01\nPHASE-01 | STATUS: CONTAINMENT_SECURE\n────────────────────────────────────\nCORE隔離を確認。\n全封鎖プロトコル正常稼働。\n対象はロックされている。較正を開始せよ。",
      en: "[SYSTEM] 2026-01-01 00:00:01\nPHASE-01 | STATUS: CONTAINMENT_SECURE\n────────────────────────────────────\nCORE isolation confirmed.\nAll containment protocols nominal.\nSubject is locked. Calibration may begin.",
    },
    ja: {
      desc: "ボールはデスクトップに固定。ウィンドウを動かして補足せよ。",
      mechanic:
        "ウィンドウを動かしてボールをゴールに導く、基本操作のフェーズ。",
      tips: [
        "急げば、核は届かない場所へ消える。",
        "終点を知らずして、旅は始まらない。",
        "ボールが画面の端に近いとき、慎重に動かすこと。",
      ],
    },
    en: {
      desc: "The ball is fixed on the desktop. Move the window to capture it.",
      mechanic:
        "The foundational phase — move the window to guide the ball to the goal.",
      tips: [
        "A nucleus pursued too eagerly retreats beyond reach.",
        "No journey begins without knowing the destination.",
        "When the ball nears the screen edge, proceed with care.",
      ],
    },
  },
  {
    id: 2,
    name: "Carry",
    difficulty: 2,
    lore: "軌道を管理せよ。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-02 03:14:07\nPHASE-02 | STATUS: CONTAINMENT_SECURE\n────────────────────────────────────\n軌道追跡アクティブ。\nCOREの移動は想定パラメータ内。\n異常なし。封鎖完全性: 100%",
      en: "[SYSTEM] 2026-01-02 03:14:07\nPHASE-02 | STATUS: CONTAINMENT_SECURE\n────────────────────────────────────\nOrbital tracking active.\nCORE movement within expected parameters.\nNo anomalies detected. Containment integrity: 100%",
    },
    ja: {
      desc: "ボールはウィンドウ吸着。デスクトップ上のゴールへ運べ。",
      mechanic: "ボールがウィンドウに追従する。ゴールの位置をよく見て運ぶ。",
      tips: [
        "運ぶものは、運ぶ者の動きに従う。",
        "どこへ向かうかを決めてから、動き始めよ。",
        "急発進と急停止は避け、滑らかに移動すること。",
      ],
    },
    en: {
      desc: "The ball clings to the window. Carry it to the goal on the desktop.",
      mechanic:
        "The ball follows the window. Study the goal location before moving.",
      tips: [
        "What is carried follows the one who carries.",
        "Decide the destination before you begin to move.",
        "Avoid sudden starts and stops — move smoothly.",
      ],
    },
  },
  {
    id: 3,
    name: "Impact",
    difficulty: 3,
    lore: "慣性を利用しろ。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-03 07:22:44\nPHASE-03 | STATUS: CONTAINMENT_SECURE\n────────────────────────────────────\n運動エネルギーイベントを記録。\n境界ストレスは許容範囲内。\nCOREは依然として受動的。隔離を維持。",
      en: "[SYSTEM] 2026-01-03 07:22:44\nPHASE-03 | STATUS: CONTAINMENT_SECURE\n────────────────────────────────────\nKinetic event logged.\nBoundary stress within tolerance.\nCORE remains passive. Isolation maintained.",
    },
    ja: {
      desc: "ウィンドウ境界でボールを弾き、ゴールへ押し込め。",
      mechanic:
        "ウィンドウの壁にボールをぶつけて反射させるフェーズ。慣性を利用せよ。",
      tips: [
        "壁は終点ではない。壁は方向を変える場所だ。",
        "速度は、角度の中に眠っている。",
        "ウィンドウを素早く動かすほど、ボールに強い力が伝わる。",
      ],
    },
    en: {
      desc: "Bounce the ball off the window borders to push it into the goal.",
      mechanic:
        "Bounce the ball off the window walls. Use momentum to your advantage.",
      tips: [
        "A wall is not an end — it is a redirection.",
        "Speed sleeps inside the angle.",
        "Moving the window quickly transfers more force to the ball.",
      ],
    },
  },
  {
    id: 4,
    name: "Trial",
    difficulty: 3,
    lore: "注視を逸らすな。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-04 11:05:19\nPHASE-04 | STATUS: MONITORING\n────────────────────────────────────\n観測プロトコルを起動。\nCORE注意パターン: 上昇中\n外部インタラクションを検知。分析のため記録。",
      en: "[SYSTEM] 2026-01-04 11:05:19\nPHASE-04 | STATUS: MONITORING\n────────────────────────────────────\nObservation protocol engaged.\nCORE attention pattern: ELEVATED\nExternal interaction detected. Logging for analysis.",
    },
    ja: {
      desc: "不安定な境界。観測（フォーカス）を制御し、環境に同期せよ。",
      mechanic:
        "ウィンドウのフォーカス状態がゲームに影響する。フォーカスを保ちながら操作。",
      tips: [
        "観測を止めた瞬間、世界は変わる。",
        "他のものに触れることは、今のものを手放すことだ。",
        "キーボードショートカットを使えば、フォーカスを保ちやすい。",
      ],
    },
    en: {
      desc: "Unstable boundaries. Control observation (focus) to sync with the environment.",
      mechanic:
        "Window focus state affects the game. Operate while keeping focus.",
      tips: [
        "The moment you stop observing, the world shifts.",
        "To touch another is to release what you hold.",
        "Keyboard shortcuts help you maintain focus without clicking elsewhere.",
      ],
    },
  },
  {
    id: 5,
    name: "Resonance",
    difficulty: 3,
    lore: "レンズを合わせろ。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-05 14:33:52\nPHASE-05 | STATUS: MONITORING\n────────────────────────────────────\n封鎖層に共鳴を検知。\nCOREが次元境界を探っている。\n周波数ずれ: 0.3% / 継続観測を推奨。",
      en: "[SYSTEM] 2026-01-05 14:33:52\nPHASE-05 | STATUS: MONITORING\n────────────────────────────────────\nResonance detected in containment layer.\nCORE is probing dimensional boundaries.\nFrequency mismatch: 0.3% / Continued observation recommended.",
    },
    ja: {
      desc: "ズーム倍率をターゲットに合わせ、次元を共鳴させよ。",
      mechanic: "Ctrl+/-でズームレベルを指定のターゲットに合わせるフェーズ。",
      tips: [
        "0には、原点へ戻る力がある。",
        "段差は一つずつ踏むべきだ。一気に飛び越えるな。",
        "画面のパーセンテージ表示を確認しながら操作する。",
      ],
    },
    en: {
      desc: "Match the zoom level to the target to resonate dimensions.",
      mechanic: "Use Ctrl+/- to match the zoom level to a specified target.",
      tips: [
        "The number 0 holds the power to return to the origin.",
        "Climb each step — do not leap over them.",
        "Use the percentage display on screen as your guide while adjusting.",
      ],
    },
  },
  {
    id: 6,
    name: "Luminance",
    difficulty: 2,
    lore: "光彩に同調せよ。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-06 18:47:30\nPHASE-06 | STATUS: MONITORING\n────────────────────────────────────\n輝度較正イベントを記録。\nCOREが光/暗の境界を利用中。\n干渉レベル: 低 / 封鎖完全性: 97%",
      en: "[SYSTEM] 2026-01-06 18:47:30\nPHASE-06 | STATUS: MONITORING\n────────────────────────────────────\nLuminance calibration event logged.\nCORE exploiting light/dark threshold.\nInterference level: LOW / Containment integrity: 97%",
    },
    ja: {
      desc: "明暗設定をターゲットに合わせ、輝度を同調させよ。",
      mechanic: "システム設定でダーク/ライトモードを切り替えるフェーズ。",
      tips: [
        "光と影は、システムの深部で制御されている。",
        "切り替えの速さが問われるステージがある。",
        "OSの外観設定からダーク/ライトモードを切り替えること。",
      ],
    },
    en: {
      desc: "Match the OS dark/light setting to the target to synchronize brightness.",
      mechanic:
        "Switch the OS dark/light mode in system settings to match the target.",
      tips: [
        "Light and shadow are governed deep within the system.",
        "There are stages where the speed of the switch is what matters.",
        "Switch dark/light mode from your OS appearance settings.",
      ],
    },
  },
  {
    id: 7,
    name: "Resize",
    difficulty: 3,
    lore: "容積を適合させよ。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-07 22:01:15\nPHASE-07 | STATUS: MONITORING\n────────────────────────────────────\n空間境界の調整を検知。\nCOREが外周ベクトルを圧迫中。\n構造完全性: 94% / エスカレーション閾値未到達。",
      en: "[SYSTEM] 2026-01-07 22:01:15\nPHASE-07 | STATUS: MONITORING\n────────────────────────────────────\nSpatial boundary adjustment detected.\nCORE stress-testing perimeter vectors.\nStructural integrity: 94% / Escalation threshold not reached.",
    },
    ja: {
      desc: "ウィンドウの幅・高さを指定サイズに合わせ、空間を再構築せよ。",
      mechanic: "ウィンドウを指定の幅・高さに正確にリサイズするフェーズ。",
      tips: [
        "空間は、辺の長さによって定義される。",
        "数値は常に何かを教えてくれる。",
        "ウィンドウの端をドラッグして幅・高さを調整すること。",
      ],
    },
    en: {
      desc: "Resize the window to the specified dimensions to reconstruct space.",
      mechanic: "Precisely resize the window to a specified width and height.",
      tips: [
        "Space is defined by the length of its edges.",
        "Numbers always have something to tell you.",
        "Drag the window edge to adjust width and height.",
      ],
    },
  },
  {
    id: 8,
    name: "Edge Snap",
    difficulty: 3,
    lore: "境界に解がある。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-08 02:18:03\nPHASE-08 | STATUS: WARNING\n────────────────────────────────────\n端部封鎖圧力: 上昇。\nCOREが外周の探索を開始。\n封鎖完全性: 89% / 警戒ステータスへの格上げを推奨。",
      en: "[SYSTEM] 2026-01-08 02:18:03\nPHASE-08 | STATUS: WARNING\n────────────────────────────────────\nEdge containment pressure: ELEVATED.\nCORE is probing the outer perimeter.\nContainment integrity: 89% / Recommend immediate alert status upgrade.",
    },
    ja: {
      desc: "ウィンドウをモニターの端に密着させ、境界を消滅させよ。",
      mechanic:
        "ウィンドウをモニターの指定した端（上/下/左/右）に完全に密着させる。",
      tips: [
        "境界が消えるとき、解が生まれる。",
        "どの端が求められているかを、ゲームが示している。",
        "ウィンドウを画面端までドラッグして離すか、スナップ機能を使うこと。",
      ],
    },
    en: {
      desc: "Press the window against the monitor edge to eliminate the boundary.",
      mechanic:
        "Snap the window fully against the specified monitor edge (top/bottom/left/right).",
      tips: [
        "When the boundary disappears, the solution is found.",
        "The game tells you which edge is required.",
        "Drag the window to the screen edge and release, or use the snap feature.",
      ],
    },
  },
  {
    id: 9,
    name: "Scroll",
    difficulty: 3,
    lore: "深度を測れ。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-09 06:44:21\nPHASE-09 | STATUS: WARNING\n────────────────────────────────────\n警告: COREの深度スキャンを検知。\n封鎖層が試されている。侵入深度: 12%\n即時点検を要求する。",
      en: "[SYSTEM] 2026-01-09 06:44:21\nPHASE-09 | STATUS: WARNING\n────────────────────────────────────\nWARNING: CORE depth scan detected.\nContainment layer is being tested. Penetration depth: 12%\nImmediate inspection required.",
    },
    ja: {
      desc: "ページスクロール量をターゲット値に合わせ、次元をスキャンせよ。",
      mechanic:
        "マウスホイールまたはスクロールバーでページをスクロールして目標値を合わせる。",
      tips: [
        "深さには、計測できる次元がある。",
        "細かい調整には、細かい操作が必要だ。",
        "HUDのスクロール数値を確認しながら、ホイールで一段ずつ調整する。",
      ],
    },
    en: {
      desc: "Match the page scroll to the target value to scan the dimension.",
      mechanic:
        "Use the mouse wheel or scrollbar to match the scroll position to the target.",
      tips: [
        "Depth has a dimension that can be measured.",
        "Fine adjustments demand fine control.",
        "Check the scroll value on the HUD and adjust one tick at a time with the wheel.",
      ],
    },
  },
  {
    id: 10,
    name: "Gravity",
    difficulty: 4,
    lore: "指向が歪んでいる。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-10 10:59:48\nPHASE-10 | STATUS: WARNING\n────────────────────────────────────\n警告: 物理カーネルの歪みを検知。\nCOREが重力ベクトルを操作中。\n環境安定性: 危殆 / 封鎖完全性: 71%",
      en: "[SYSTEM] 2026-01-10 10:59:48\nPHASE-10 | STATUS: WARNING\n────────────────────────────────────\nALERT: Physics kernel distortion detected.\nCORE is manipulating the gravity vector.\nEnvironmental stability: COMPROMISED / Containment integrity: 71%",
    },
    ja: {
      desc: "重力方向が変化した。新たな物理法則に適応しボールを誘導せよ。",
      mechanic:
        "重力が上下左右に変化するフェーズ。ボールの動きが大きく変わる。",
      tips: [
        "下が常に下とは限らない。",
        "逆らうには、素早さが必要だ。",
        "画面の重力インジケーターで現在の方向を確認すること。",
      ],
    },
    en: {
      desc: "Gravity direction has changed. Adapt to new physics and guide the ball.",
      mechanic:
        "Gravity can change in any of 4 directions, drastically altering ball behavior.",
      tips: [
        "Down is not always down.",
        "To resist, you must be swift.",
        "Check the on-screen gravity indicator to confirm the current direction.",
      ],
    },
  },
  {
    id: 11,
    name: "Time Attack",
    difficulty: 4,
    lore: "残響が加速する。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-11 15:23:07\nPHASE-11 | STATUS: WARNING\n────────────────────────────────────\n緊急タイミングイベントを検知。\nCOREが時間圧力プロトコルを実行中。\n応答時間: 逼迫 / 封鎖完全性: 58%",
      en: "[SYSTEM] 2026-01-11 15:23:07\nPHASE-11 | STATUS: WARNING\n────────────────────────────────────\nCritical timing event detected.\nCORE executing time-pressure protocol.\nResponse window: NARROWING / Containment integrity: 58%",
    },
    ja: {
      desc: "制限時間内にクリアせよ。時間切れはリセットを意味する。",
      mechanic:
        "カウントダウンタイマーが設定され、時間内にゴールしないとやり直し。",
      tips: [
        "準備のない者に、時は味方しない。",
        "大胆さが、距離を縮める。",
        "時間に焦ると操作が荒れる。挑む前に一度落ち着くこと。",
      ],
    },
    en: {
      desc: "Clear within the time limit. Running out of time means a reset.",
      mechanic:
        "A countdown timer is set. Fail to reach the goal in time and it resets.",
      tips: [
        "Time is no ally to the unprepared.",
        "Boldness shortens distance.",
        "Panic ruins precision — take a breath before each attempt.",
      ],
    },
  },
  {
    id: 12,
    name: "Multi Goal",
    difficulty: 4,
    lore: "連鎖を断つな。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-12 19:37:55\nPHASE-12 | STATUS: CRITICAL\n────────────────────────────────────\n警告: 多点COREアクティビティを検出。\n連続ロック破壊を確認。\nロック完全性: 43% / COREはシーケンスを学習している。",
      en: "[SYSTEM] 2026-01-12 19:37:55\nPHASE-12 | STATUS: CRITICAL\n────────────────────────────────────\nALERT: Multi-vector CORE activity detected.\nSequential lock compromise confirmed.\nLock integrity: 43% / CORE IS LEARNING THE SEQUENCE.",
    },
    ja: {
      desc: "複数のゴールを指定順に通過せよ。順序を誤れば最初からだ。",
      mechanic: "複数ゴールを番号順に通過するフェーズ。順序が重要。",
      tips: [
        "順序が乱れれば、連鎖は断たれる。",
        "次の場所を知る者だけが、効率的に動ける。",
        "ゴール間の移動中も、ボールから目を離さないこと。",
      ],
    },
    en: {
      desc: "Pass through multiple goals in the specified order. Wrong order resets.",
      mechanic: "Pass through multiple goals in numbered order. Order matters.",
      tips: [
        "Break the sequence and the chain breaks.",
        "Only those who know the next destination move efficiently.",
        "Do not lose sight of the ball while moving between goals.",
      ],
    },
  },
  {
    id: 13,
    name: "Fake Goal",
    difficulty: 3,
    lore: "虚実を見極めろ。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-13 23:52:14\nPHASE-13 | STATUS: CRITICAL\n────────────────────────────────────\n信号真正性の失敗を検知。\nCOREが偽の出力層を生成中。\n現実識別能力: DE_RADED\n何を信じるべきか、我々にはわからない。",
      en: "[SYSTEM] 2026-01-13 23:52:14\nPHASE-13 | STATUS: CRITICAL\n────────────────────────────────────\nSignal authenticity failure detected.\nCORE generating false output layers.\nReality discrimination: DE_RADED\nWe can n0t trust wh4t we see anymore.",
    },
    ja: {
      desc: "偽のゴールが混在する。真のターゲットを見極めよ。",
      mechanic: "複数のゴールのうち一つが本物。見た目の違いで本物を判別する。",
      tips: [
        "見えるものが全てではない。",
        "形か、色か、それとも動きか。",
        "間違ったゴールに入れるとペナルティがある。慎重に見極めること。",
      ],
    },
    en: {
      desc: "False goals are mixed in. Identify the true target.",
      mechanic:
        "Among multiple goals, only one is real. Identify it by appearance.",
      tips: [
        "Not everything that appears is real.",
        "Shape, color, or movement — one of these holds the answer.",
        "Entering the wrong goal carries a penalty — identify the real one carefully.",
      ],
    },
  },
  {
    id: 14,
    name: "Escape Goal",
    difficulty: 4,
    lore: "逃避を許さない。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-14 04:06:39\nPHASE-14 | STATUS: CRITICAL\n────────────────────────────────────\n封鎖境界が不安定化。\nCOREが追跡プロトコルを逆転させた。\n封鎖完全性: 27% / 我々が■われている。",
      en: "[SYSTEM] 2026-01-14 04:06:39\nPHASE-14 | STATUS: CRITICAL\n────────────────────────────────────\nContainment boundary destabilized.\nCORE has reversed the pursuit protocol.\nContainment integrity: 27% / We are being h4nted.",
    },
    ja: {
      desc: "ゴールが逃げる。ウィンドウで追い詰め、捕捉せよ。",
      mechanic:
        "ゴールが動き回るフェーズ。ウィンドウで追いかけてゴールに当てる。",
      tips: [
        "逃げるものにはパターンがある。",
        "追い詰めるには、挟む場所が必要だ。",
        "焦らず、ゴールが自分のほうへ来るのを待つ戦術も有効。",
      ],
    },
    en: {
      desc: "The goal is running. Corner it with the window and capture it.",
      mechanic:
        "The goal moves around. Chase it with the window and make contact.",
      tips: [
        "Everything that flees has a pattern.",
        "To corner something, you need a place to corner it.",
        "Patience can work — wait for the goal to come toward you.",
      ],
    },
  },
  {
    id: 15,
    name: "Invert",
    difficulty: 4,
    lore: "世界が反転した。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-15 08:21:17\nPHASE-15 | STATUS: CRITICAL\n────────────────────────────────────\n反転イベント確認。\nCORE/SYSTEM境界: 崩壊。\n封鎖完全性: 9%\nSYSTEMエラー■■■。",
      en: "[SYSTEM] 2026-01-15 08:21:17\nPHASE-15 | STATUS: CRITICAL\n────────────────────────────────────\nInversion event confirmed.\nCORE/SYSTEM boundary: COLLAPSED.\nContainment integrity: 9%\SYSTEM ERROR.",
    },
    ja: {
      desc: "空間が反転した。逆方向への思考で同期を達成せよ。",
      mechanic:
        "ウィンドウ操作の上下・左右が反転するフェーズ。直感と逆に動かす。",
      tips: [
        "世界が反転した時、直感は敵になる。",
        "ゆっくり動けば、逆が分かる。",
        "「右に動かしたい」時は「左に操作する」と意識を切り替えること。",
      ],
    },
    en: {
      desc: "Space has inverted. Achieve sync through reversed thinking.",
      mechanic:
        "Window controls are inverted — move opposite to your intention.",
      tips: [
        "When the world inverts, instinct becomes the enemy.",
        "Move slowly and the inversion reveals itself.",
        "Remap your mind: 'want to go right' means 'operate left'.",
      ],
    },
  },
  {
    id: 16,
    name: "Invisible",
    difficulty: 5,
    lore: "盲目のまま進め。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-16 12:44:03\nPHASE-16 | STATUS: CRITICAL\n────────────────────────────────────\nCOREが不可視化。追跡: 不可能。\n封鎖完全性: ■%\nSYST■Mは■■■■■■■■■■。\nCORE",
      en: "[SYSTEM] 2026-01-16 12:44:03\nPHASE-16 | STATUS: CRITICAL\n────────────────────────────────────\nCORE has gone invisible. Tracking: IMPOSSIBLE.\nContainment integrity: ■%\nSYST■M is ■■■■■■■■■■■■■■■.\nC0RE.",
    },
    ja: {
      desc: "ボールが消えた。ミニマップとDISTのみを頼りに進め。",
      mechanic:
        "ボールが不可視になるフェーズ。ミニマップの点とDIST数値だけで位置を把握。",
      tips: [
        "見えなくても、存在は消えない。別の目で見よ。",
        "数字が縮むほど、距離は縮む。",
        "急な移動は避け、DIST数値を確認しながら近づくこと。",
      ],
    },
    en: {
      desc: "The ball has vanished. Rely only on the minimap and DIST to proceed.",
      mechanic:
        "The ball becomes invisible. Use only the minimap dot and DIST value to navigate.",
      tips: [
        "Unseen does not mean gone. Find another way to see.",
        "As the number shrinks, so does the distance.",
        "Avoid sudden moves — inch closer while watching the DIST value.",
      ],
    },
  },
  {
    id: 17,
    name: "Title Hint",
    difficulty: 5,
    lore: "俯瞰に置かれた答えを探せ。",
    systemMsg: {
      ja: "[SYSTEM] 2026-01-17 ██:██:██\nPHASE-17 | STATUS: SYST■M_FAIL■RE\n────────────────────────────────────\n██████████████████████████████████\n[CORE]",
      en: "[SYSTEM] 2026-01-17 ██:██:██\nPHASE-17 | STATUS: SYST■M_FAIL■RE\n────────────────────────────────────\n██████████████████████████████████\n[CORE]",
    },
    ja: {
      desc: "タイトルバーに答えが隠されている。よく読め。",
      mechanic:
        "ウィンドウのタイトルバーに表示されたキーワードを入力するフェーズ。",
      tips: [
        "答えは、常に目の前にある。ただ見上げるだけでよい。",
        "一字一句、正確に。細部が全てを決める。",
        "タイトルバーのキーワードをゲーム内入力欄に正確に入力すること。大文字・小文字・全角/半角に注意。",
      ],
    },
    en: {
      desc: "The answer is hidden in the title bar. Read carefully.",
      mechanic:
        "A keyword displayed in the window title bar must be typed into the game.",
      tips: [
        "The answer is always in front of you. You only need to look up.",
        "Every character matters. Precision decides everything.",
        "Type the title bar keyword exactly into the in-game input field — watch case and character width.",
      ],
    },
  },
];

/* ── Language Management ──────────────────────────────────── */
let currentLang = localStorage.getItem("bm-lang") || "ja";

function t(key) {
  return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS["ja"][key] ?? key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("bm-lang", lang);
  applyI18n();
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
}

/* ── Phase Helper ─────────────────────────────────────────── */
function getPhase(id) {
  return PHASE_DATA.find((p) => p.id === id);
}

function renderStars(difficulty) {
  return Array.from(
    { length: 5 },
    (_, i) => `<span class="star${i < difficulty ? " filled" : ""}">★</span>`,
  ).join("");
}
