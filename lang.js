// ============================================
// Today Tab - Multi-language Support
// Languages: 한국어, English, 日本語, 中文
// ============================================

const LANGUAGES = {
    ko: {
        name: '한국어',
        flag: '🇰🇷',
        // Common
        save: '저장',
        cancel: '취소',
        delete: '삭제',
        edit: '편집',
        add: '추가',
        close: '닫기',
        confirm: '확인',
        search: '검색',
        reset: '초기화',
        backup: '백업',
        restore: '복원',
        download: '다운로드',
        upload: '업로드',
        complete: '완료',
        total: '전체',
        thisMonth: '이번 달',
        thisYear: '올해',
        monthlyAvg: '월 평균',
        moodStats: '기분 통계',
        
        // Navigation
        home: '홈',
        todo: '할 일',
        diary: '일기',
        budget: '가계부',
        
        // Home Page
        greeting: '오늘도 좋은 하루 되세요 ✨',
        todaysTasks: '오늘의 할 일',
        thisMonthBalance: '이번 달 잔액',
        manageGoals: '오늘의 목표를 관리하세요',
        recordToday: '오늘 하루를 기록하세요',
        manageFinances: '수입과 지출을 관리하세요',
        score: '점수',
        myRecord: '나의 기록',
        
        // Quick Links
        favorites: '즐겨찾기',
        addLink: '링크 추가',
        editLink: '링크 수정',
        linkName: '이름',
        linkUrl: 'URL',
        linkNamePlaceholder: '예: 도서관',
        selectIcon: '아이콘',
        selectColor: '색상',
        fillNameAndUrl: '이름과 URL을 입력해주세요.',
        confirmDeleteLink: '"{name}" 링크를 삭제하시겠습니까?',
        
        // Info Popup
        usageGuide: '사용 안내',
        offlineAvailable: '로컬 저장으로 오프라인에서도 사용 가능합니다',
        securityComplete: '인터넷에 노출되지 않아 보안이 완벽합니다',
        backupInfo: '백업은 메모장에 저장 후 불러오기로 복원 가능하며, 새 디바이스에서도 복원할 수 있습니다',
        backupWarning: '백업 없이 디바이스 변경 시 자료가 삭제되니 주의하세요',
        
        // Logo
        hideLogo: '숨기기',
        
        // ============ TODO APP ============
        todoTitle: '오늘의 할 일',
        addTask: '할 일 추가',
        enterTask: '할 일을 입력하세요',
        noTasks: '할 일이 없습니다',
        taskComplete: '완료',
        deleteCompleted: '완료된 항목 삭제',
        todayScore: '오늘의 점수',
        points: 'P',
        
        taskList: '할 일 목록',
        calendar: '캘린더',
        statistics: '통계',
        settings: '설정',
        goals: '목표/성찰',
        backgroundChange: '배경 변경',
        reminder: '리마인더',
        
        monthlyGoal: '이번 달 목표',
        monthlyReflection: '이번 달 성찰',
        enterGoal: '목표를 입력하세요',
        enterReflection: '성찰을 입력하세요',
        
        reminderMemo: '리마인더 메모',
        enterReminder: '잊지 말아야 할 것을 적어주세요',
        
        weeklyStats: '주간 통계',
        monthlyStats: '월간 통계',
        completionRate: '달성률',
        totalTasks: '총 할 일',
        completedTasks: '완료',
        
        // ============ DIARY APP ============
        diaryTitle: '나의 일기',
        writeDiary: '일기 쓰기',
        diaryDate: '날짜',
        diaryTitle2: '제목',
        diaryContent: '내용',
        diaryMood: '오늘의 기분',
        enterTitle: '제목을 입력하세요',
        enterContent: '오늘 하루를 기록해보세요...',
        noDiaries: '작성된 일기가 없습니다',
        
        diaryList: '일기 목록',
        diaryWrite: '일기 쓰기',
        diarySearch: '검색',
        diarySettings: '설정',
        myResolution: '나의 다짐',
        enterResolution: '나의 다짐을 입력하세요',
        
        moodGreat: '최고',
        moodGood: '좋음',
        moodNormal: '보통',
        moodBad: '나쁨',
        moodTerrible: '최악',
        
        searchDiary: '일기 검색',
        searchPlaceholder: '제목 또는 내용으로 검색',
        noResults: '검색 결과가 없습니다',
        
        viewPastYears: '이전 년도 보기',
        showMore: '펼치기',
        showLess: '접기',
        
        // ============ MONEY APP ============
        moneyTitle: '가계부',
        newTransaction: '새 거래 기록',
        transactionHistory: '거래 내역',
        monthlyGoals: '나의 목표',
        fixedExpenses: '고정 수입/지출',
        assetGallery: '자산 이미지 보관함',
        
        income: '수입',
        expense: '지출',
        generalExpense: '일반지출',
        savingExpense: '저축성지출',
        fixedExpense: '비저축성지출',
        
        date: '날짜',
        category: '분류',
        amount: '금액',
        memo: '메모',
        enterAmount: '금액을 입력하세요',
        enterMemo: '메모를 입력하세요',
        
        salary: '급여',
        bonus: '보너스',
        interest: '이자',
        otherIncome: '기타수입',
        food: '식비',
        transport: '교통',
        shopping: '쇼핑',
        entertainment: '여가',
        health: '의료',
        education: '교육',
        housing: '주거',
        communication: '통신',
        otherExpense: '기타지출',
        
        monthlySummary: '월간 요약',
        totalIncome: '총 수입',
        totalExpense: '총 지출',
        balance: '잔액',
        monthlyBalance: '이번 달 잔액',
        
        fixedIncome: '고정수입',
        avgMonthlyFood: '평균월식자재비',
        savingDeposit: '저축성지출',
        mandatoryExpense: '의무지출',
        totalFixedIncome: '총 고정수입',
        totalFixedExpense: '총 고정지출',
        carryOver: '이월액 (가용금액)',
        
        fixedIncomeEx: '예: 급여, 임대수입, 연금 등',
        foodEx: '예: 식료품, 외식비 등',
        savingEx: '예: 적금, 보험료, 연금저축 등',
        mandatoryEx: '예: 관리비, 통신비, 구독료 등',
        
        monthlyFixedSummary: '월간 고정 수입/지출 요약',
        yearlyEstimate: '연간 가상통계 보기',
        yearlyMultiplier: '(월간 × 12개월)',
        yearlyTotalIncome: '연간 총 수입',
        yearlyFoodExpense: '연간 식자재비',
        yearlySavingExpense: '연간 저축성지출',
        yearlyMandatoryExpense: '연간 의무지출',
        yearlyTotalExpense: '연간 총 지출',
        yearlyBalance: '연간 예상 잔액',
        
        fiveYearStats: '5개년 통계',
        annualBalance: '연간 잔액',
        
        assetTitle: '나의 자산 현황',
        assetDesc: '보험증권, 예금통장, 투자내역 등 중요한 자산 서류를 분류하여 관리하세요',
        savingAssets: '저축성 지출',
        savingAssetsDesc: '예금, 적금, 저축보험, 연금, 투자 등',
        fixedAssets: '비저축성 지출 (의무지출)',
        fixedAssetsDesc: '의료실손, 자동차보험, 화재보험 등 보장성 보험',
        otherAssets: '기타 보관용',
        otherAssetsDesc: '영수증, 계약서, 메모 등 기타 캡처 화면',
        addImage: '추가',
        itemName: '항목 이름',
        selectImage: '이미지 선택',
        noImages: '등록된 이미지가 없습니다',
        maxImages: '이 분류에는 최대 10개까지 등록 가능합니다.',
        
        backupRestore: '백업/복원',
        pcBackup: 'PC 백업 (다운로드)',
        mobileBackup: '모바일 백업 (공유하기)',
        restoreData: '데이터 복원',
        resetData: '데이터 초기화',
        resetWarning: '모든 데이터가 삭제됩니다. 계속하시겠습니까?',
        
        sun: '일', mon: '월', tue: '화', wed: '수', thu: '목', fri: '금', sat: '토',
        
        january: '1월', february: '2월', march: '3월', april: '4월',
        may: '5월', june: '6월', july: '7월', august: '8월',
        september: '9월', october: '10월', november: '11월', december: '12월',
        
        yearMonth: '{year}년 {month}',
        fullDate: '{year}년 {month} {day}일 {weekday}요일',
        
        currency: '원',
        currencyFormat: '{amount}원'
    },
    
    en: {
        name: 'English',
        flag: '🇺🇸',
        save: 'Save', cancel: 'Cancel', delete: 'Delete', edit: 'Edit', add: 'Add',
        close: 'Close', confirm: 'Confirm', search: 'Search', reset: 'Reset',
        backup: 'Backup', restore: 'Restore', download: 'Download', upload: 'Upload',
        complete: 'Done', total: 'Total', thisMonth: 'This Month', thisYear: 'This Year',
        monthlyAvg: 'Monthly Avg', moodStats: 'Mood Stats',
        
        home: 'Home', todo: 'Todo', diary: 'Diary', budget: 'Budget',
        
        greeting: 'Have a great day! ✨',
        todaysTasks: "Today's Tasks",
        thisMonthBalance: 'This Month',
        manageGoals: 'Manage your daily goals',
        recordToday: 'Record your day',
        manageFinances: 'Manage income & expenses',
        score: 'Score',
        myRecord: 'My Record',
        
        favorites: 'Favorites',
        addLink: 'Add Link',
        editLink: 'Edit Link',
        linkName: 'Name',
        linkUrl: 'URL',
        linkNamePlaceholder: 'e.g., Library',
        selectIcon: 'Icon',
        selectColor: 'Color',
        fillNameAndUrl: 'Please enter name and URL.',
        confirmDeleteLink: 'Delete "{name}" link?',
        
        usageGuide: 'User Guide',
        offlineAvailable: 'Works offline with local storage',
        securityComplete: 'Your data stays private - never uploaded',
        backupInfo: 'Backup to notepad and restore on new devices',
        backupWarning: 'Data will be lost when changing devices without backup',
        
        hideLogo: 'Hide',
        
        todoTitle: "Today's Tasks", addTask: 'Add Task', enterTask: 'Enter a task',
        noTasks: 'No tasks', taskComplete: 'Done', deleteCompleted: 'Delete completed',
        todayScore: "Today's Score", points: 'P',
        taskList: 'Task List', calendar: 'Calendar', statistics: 'Statistics',
        settings: 'Settings', goals: 'Goals', backgroundChange: 'Background', reminder: 'Reminder',
        monthlyGoal: 'Monthly Goal', monthlyReflection: 'Monthly Reflection',
        enterGoal: 'Enter your goal', enterReflection: 'Enter your reflection',
        reminderMemo: 'Reminder', enterReminder: 'Write things to remember',
        weeklyStats: 'Weekly Stats', monthlyStats: 'Monthly Stats',
        completionRate: 'Completion Rate', totalTasks: 'Total Tasks', completedTasks: 'Completed',
        
        diaryTitle: 'My Diary', writeDiary: 'Write Diary', diaryDate: 'Date',
        diaryTitle2: 'Title', diaryContent: 'Content', diaryMood: "Today's Mood",
        enterTitle: 'Enter title', enterContent: 'Write about your day...',
        noDiaries: 'No diary entries',
        diaryList: 'Diary List', diaryWrite: 'Write', diarySearch: 'Search',
        diarySettings: 'Settings', myResolution: 'My Resolution', enterResolution: 'Enter your resolution',
        moodGreat: 'Great', moodGood: 'Good', moodNormal: 'Normal', moodBad: 'Bad', moodTerrible: 'Terrible',
        searchDiary: 'Search Diary', searchPlaceholder: 'Search by title or content', noResults: 'No results found',
        viewPastYears: 'View Past Years', showMore: 'Show', showLess: 'Hide',
        
        moneyTitle: 'Budget', newTransaction: 'New Transaction', transactionHistory: 'History',
        monthlyGoals: 'My Goals', fixedExpenses: 'Fixed Income/Expenses', assetGallery: 'Asset Gallery',
        income: 'Income', expense: 'Expense', generalExpense: 'General',
        savingExpense: 'Savings', fixedExpense: 'Fixed',
        date: 'Date', category: 'Category', amount: 'Amount', memo: 'Memo',
        enterAmount: 'Enter amount', enterMemo: 'Enter memo',
        salary: 'Salary', bonus: 'Bonus', interest: 'Interest', otherIncome: 'Other Income',
        food: 'Food', transport: 'Transport', shopping: 'Shopping', entertainment: 'Entertainment',
        health: 'Health', education: 'Education', housing: 'Housing',
        communication: 'Communication', otherExpense: 'Other',
        monthlySummary: 'Monthly Summary', totalIncome: 'Total Income',
        totalExpense: 'Total Expense', balance: 'Balance', monthlyBalance: 'Monthly Balance',
        fixedIncome: 'Fixed Income', avgMonthlyFood: 'Monthly Food Budget',
        savingDeposit: 'Savings', mandatoryExpense: 'Mandatory Expenses',
        totalFixedIncome: 'Total Fixed Income', totalFixedExpense: 'Total Fixed Expense',
        carryOver: 'Available Balance',
        fixedIncomeEx: 'e.g., Salary, Rent income, Pension',
        foodEx: 'e.g., Groceries, Dining out',
        savingEx: 'e.g., Savings, Insurance, Pension',
        mandatoryEx: 'e.g., Utilities, Phone, Subscriptions',
        monthlyFixedSummary: 'Monthly Fixed Summary',
        yearlyEstimate: 'Yearly Estimate', yearlyMultiplier: '(Monthly × 12)',
        yearlyTotalIncome: 'Yearly Income', yearlyFoodExpense: 'Yearly Food',
        yearlySavingExpense: 'Yearly Savings', yearlyMandatoryExpense: 'Yearly Mandatory',
        yearlyTotalExpense: 'Yearly Expense', yearlyBalance: 'Yearly Balance',
        fiveYearStats: '5-Year Statistics', annualBalance: 'Annual Balance',
        assetTitle: 'My Assets',
        assetDesc: 'Organize important documents like insurance, bank statements, investments',
        savingAssets: 'Savings', savingAssetsDesc: 'Deposits, savings insurance, pension, investments',
        fixedAssets: 'Fixed Expenses', fixedAssetsDesc: 'Health insurance, car insurance, property insurance',
        otherAssets: 'Others', otherAssetsDesc: 'Receipts, contracts, memos, etc.',
        addImage: 'Add', itemName: 'Item Name', selectImage: 'Select Image',
        noImages: 'No images', maxImages: 'Maximum 10 images per category',
        backupRestore: 'Backup/Restore', pcBackup: 'PC Backup (Download)',
        mobileBackup: 'Mobile Backup (Share)', restoreData: 'Restore Data',
        resetData: 'Reset Data', resetWarning: 'All data will be deleted. Continue?',
        
        sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat',
        january: 'Jan', february: 'Feb', march: 'Mar', april: 'Apr',
        may: 'May', june: 'Jun', july: 'Jul', august: 'Aug',
        september: 'Sep', october: 'Oct', november: 'Nov', december: 'Dec',
        yearMonth: '{month} {year}',
        fullDate: '{weekday}, {month} {day}, {year}',
        currency: '$',
        currencyFormat: '${amount}'
    },
    
    ja: {
        name: '日本語',
        flag: '🇯🇵',
        save: '保存', cancel: 'キャンセル', delete: '削除', edit: '編集', add: '追加',
        close: '閉じる', confirm: '確認', search: '検索', reset: 'リセット',
        backup: 'バックアップ', restore: '復元', download: 'ダウンロード',
        upload: 'アップロード', complete: '完了',
        
        home: 'ホーム', todo: 'タスク', diary: '日記', budget: '家計簿',
        
        greeting: '今日も良い一日を ✨',
        todaysTasks: '今日のタスク',
        thisMonthBalance: '今月の残高',
        manageGoals: '今日の目標を管理',
        recordToday: '今日を記録',
        manageFinances: '収支を管理',
        score: 'スコア',
        myRecord: '私の記録',
        
        favorites: 'お気に入り',
        addLink: 'リンク追加',
        editLink: 'リンク編集',
        linkName: '名前',
        linkUrl: 'URL',
        linkNamePlaceholder: '例: 図書館',
        selectIcon: 'アイコン',
        selectColor: '色',
        fillNameAndUrl: '名前とURLを入力してください。',
        confirmDeleteLink: '「{name}」リンクを削除しますか？',
        
        usageGuide: 'ご利用案内',
        offlineAvailable: 'オフラインでも使用可能',
        securityComplete: 'データは外部に送信されません',
        backupInfo: 'メモ帳に保存して新しいデバイスで復元可能',
        backupWarning: 'バックアップなしでデバイス変更するとデータが消えます',
        
        hideLogo: '非表示',
        
        todoTitle: '今日のタスク', addTask: 'タスク追加', enterTask: 'タスクを入力',
        noTasks: 'タスクなし', taskComplete: '完了', deleteCompleted: '完了を削除',
        todayScore: '今日のスコア', points: 'P',
        taskList: 'タスク一覧', calendar: 'カレンダー', statistics: '統計',
        settings: '設定', goals: '目標', backgroundChange: '背景変更', reminder: 'リマインダー',
        monthlyGoal: '今月の目標', monthlyReflection: '今月の振り返り',
        enterGoal: '目標を入力', enterReflection: '振り返りを入力',
        reminderMemo: 'リマインダー', enterReminder: '忘れないことを書いてください',
        weeklyStats: '週間統計', monthlyStats: '月間統計',
        completionRate: '達成率', totalTasks: '総タスク', completedTasks: '完了',
        
        diaryTitle: '私の日記', writeDiary: '日記を書く', diaryDate: '日付',
        diaryTitle2: 'タイトル', diaryContent: '内容', diaryMood: '今日の気分',
        enterTitle: 'タイトルを入力', enterContent: '今日のことを書いてみましょう...',
        noDiaries: '日記がありません',
        diaryList: '日記一覧', diaryWrite: '作成', diarySearch: '検索',
        diarySettings: '設定', myResolution: '私の決意', enterResolution: '決意を入力',
        moodGreat: '最高', moodGood: '良い', moodNormal: '普通', moodBad: '悪い', moodTerrible: '最悪',
        searchDiary: '日記検索', searchPlaceholder: 'タイトルまたは内容で検索', noResults: '結果なし',
        viewPastYears: '過去の年を表示', showMore: '展開', showLess: '折りたたむ',
        
        moneyTitle: '家計簿', newTransaction: '新しい取引', transactionHistory: '取引履歴',
        monthlyGoals: '私の目標', fixedExpenses: '固定収支', assetGallery: '資産画像',
        income: '収入', expense: '支出', generalExpense: '一般支出',
        savingExpense: '貯蓄支出', fixedExpense: '固定支出',
        date: '日付', category: '分類', amount: '金額', memo: 'メモ',
        enterAmount: '金額を入力', enterMemo: 'メモを入力',
        salary: '給与', bonus: 'ボーナス', interest: '利子', otherIncome: 'その他収入',
        food: '食費', transport: '交通', shopping: '買い物', entertainment: '娯楽',
        health: '医療', education: '教育', housing: '住居',
        communication: '通信', otherExpense: 'その他',
        monthlySummary: '月間サマリー', totalIncome: '総収入',
        totalExpense: '総支出', balance: '残高', monthlyBalance: '今月の残高',
        fixedIncome: '固定収入', avgMonthlyFood: '月間食費',
        savingDeposit: '貯蓄', mandatoryExpense: '固定費',
        totalFixedIncome: '総固定収入', totalFixedExpense: '総固定支出',
        carryOver: '使用可能額',
        fixedIncomeEx: '例：給与、家賃収入、年金',
        foodEx: '例：食料品、外食費',
        savingEx: '例：積立、保険料、年金貯蓄',
        mandatoryEx: '例：管理費、通信費、購読料',
        monthlyFixedSummary: '月間固定収支サマリー',
        yearlyEstimate: '年間推定', yearlyMultiplier: '(月間 × 12ヶ月)',
        yearlyTotalIncome: '年間収入', yearlyFoodExpense: '年間食費',
        yearlySavingExpense: '年間貯蓄', yearlyMandatoryExpense: '年間固定費',
        yearlyTotalExpense: '年間支出', yearlyBalance: '年間残高',
        fiveYearStats: '5年間統計', annualBalance: '年間残高',
        assetTitle: '私の資産',
        assetDesc: '保険証券、通帳、投資内容など重要書類を分類して管理',
        savingAssets: '貯蓄性支出', savingAssetsDesc: '預金、積立、貯蓄保険、年金、投資など',
        fixedAssets: '固定支出', fixedAssetsDesc: '医療保険、自動車保険、火災保険など',
        otherAssets: 'その他', otherAssetsDesc: '領収書、契約書、メモなど',
        addImage: '追加', itemName: '項目名', selectImage: '画像選択',
        noImages: '画像なし', maxImages: 'カテゴリごとに最大10枚まで',
        backupRestore: 'バックアップ/復元', pcBackup: 'PCバックアップ',
        mobileBackup: 'モバイルバックアップ', restoreData: 'データ復元',
        resetData: 'データリセット', resetWarning: 'すべてのデータが削除されます。続けますか？',
        
        sun: '日', mon: '月', tue: '火', wed: '水', thu: '木', fri: '金', sat: '土',
        january: '1月', february: '2月', march: '3月', april: '4月',
        may: '5月', june: '6月', july: '7月', august: '8月',
        september: '9月', october: '10月', november: '11月', december: '12月',
        yearMonth: '{year}年{month}',
        fullDate: '{year}年{month}{day}日 ({weekday})',
        currency: '円',
        currencyFormat: '{amount}円'
    },
    
    zh: {
        name: '中文',
        flag: '🇨🇳',
        save: '保存', cancel: '取消', delete: '删除', edit: '编辑', add: '添加',
        close: '关闭', confirm: '确认', search: '搜索', reset: '重置',
        backup: '备份', restore: '恢复', download: '下载', upload: '上传', complete: '完成',
        
        home: '首页', todo: '待办', diary: '日记', budget: '账本',
        
        greeting: '祝你今天愉快 ✨',
        todaysTasks: '今日待办',
        thisMonthBalance: '本月余额',
        manageGoals: '管理今日目标',
        recordToday: '记录今天',
        manageFinances: '管理收支',
        score: '分数',
        myRecord: '我的记录',
        
        favorites: '收藏夹',
        addLink: '添加链接',
        editLink: '编辑链接',
        linkName: '名称',
        linkUrl: 'URL',
        linkNamePlaceholder: '例如：图书馆',
        selectIcon: '图标',
        selectColor: '颜色',
        fillNameAndUrl: '请输入名称和URL。',
        confirmDeleteLink: '删除"{name}"链接？',
        
        usageGuide: '使用指南',
        offlineAvailable: '本地存储，离线可用',
        securityComplete: '数据不会上传，安全可靠',
        backupInfo: '备份到记事本，可在新设备上恢复',
        backupWarning: '更换设备前请备份，否则数据会丢失',
        
        hideLogo: '隐藏',
        
        todoTitle: '今日待办', addTask: '添加任务', enterTask: '输入任务',
        noTasks: '没有任务', taskComplete: '完成', deleteCompleted: '删除已完成',
        todayScore: '今日得分', points: '分',
        taskList: '任务列表', calendar: '日历', statistics: '统计',
        settings: '设置', goals: '目标', backgroundChange: '更换背景', reminder: '提醒',
        monthlyGoal: '本月目标', monthlyReflection: '本月反思',
        enterGoal: '输入目标', enterReflection: '输入反思',
        reminderMemo: '提醒', enterReminder: '写下不要忘记的事',
        weeklyStats: '周统计', monthlyStats: '月统计',
        completionRate: '完成率', totalTasks: '总任务', completedTasks: '已完成',
        
        diaryTitle: '我的日记', writeDiary: '写日记', diaryDate: '日期',
        diaryTitle2: '标题', diaryContent: '内容', diaryMood: '今日心情',
        enterTitle: '输入标题', enterContent: '记录今天的生活...',
        noDiaries: '没有日记',
        diaryList: '日记列表', diaryWrite: '写作', diarySearch: '搜索',
        diarySettings: '设置', myResolution: '我的决心', enterResolution: '输入决心',
        moodGreat: '超棒', moodGood: '开心', moodNormal: '一般', moodBad: '不好', moodTerrible: '很差',
        searchDiary: '搜索日记', searchPlaceholder: '按标题或内容搜索', noResults: '没有结果',
        viewPastYears: '查看往年', showMore: '展开', showLess: '收起',
        
        moneyTitle: '账本', newTransaction: '新交易', transactionHistory: '交易记录',
        monthlyGoals: '我的目标', fixedExpenses: '固定收支', assetGallery: '资产图库',
        income: '收入', expense: '支出', generalExpense: '一般支出',
        savingExpense: '储蓄支出', fixedExpense: '固定支出',
        date: '日期', category: '分类', amount: '金额', memo: '备注',
        enterAmount: '输入金额', enterMemo: '输入备注',
        salary: '工资', bonus: '奖金', interest: '利息', otherIncome: '其他收入',
        food: '餐饮', transport: '交通', shopping: '购物', entertainment: '娱乐',
        health: '医疗', education: '教育', housing: '住房',
        communication: '通讯', otherExpense: '其他',
        monthlySummary: '月度总结', totalIncome: '总收入',
        totalExpense: '总支出', balance: '余额', monthlyBalance: '本月余额',
        fixedIncome: '固定收入', avgMonthlyFood: '月均餐费',
        savingDeposit: '储蓄', mandatoryExpense: '必要支出',
        totalFixedIncome: '总固定收入', totalFixedExpense: '总固定支出',
        carryOver: '可用余额',
        fixedIncomeEx: '例如：工资、租金收入、养老金',
        foodEx: '例如：食材、外出就餐',
        savingEx: '例如：定存、保险、养老储蓄',
        mandatoryEx: '例如：物业费、话费、订阅费',
        monthlyFixedSummary: '月度固定收支总结',
        yearlyEstimate: '年度预估', yearlyMultiplier: '(月度 × 12个月)',
        yearlyTotalIncome: '年度收入', yearlyFoodExpense: '年度餐费',
        yearlySavingExpense: '年度储蓄', yearlyMandatoryExpense: '年度必要支出',
        yearlyTotalExpense: '年度支出', yearlyBalance: '年度余额',
        fiveYearStats: '五年统计', annualBalance: '年度余额',
        assetTitle: '我的资产',
        assetDesc: '分类管理保险单、存折、投资记录等重要文件',
        savingAssets: '储蓄性支出', savingAssetsDesc: '存款、定存、储蓄保险、养老金、投资等',
        fixedAssets: '固定支出', fixedAssetsDesc: '医疗保险、车险、火险等保障性保险',
        otherAssets: '其他', otherAssetsDesc: '收据、合同、备忘录等',
        addImage: '添加', itemName: '项目名称', selectImage: '选择图片',
        noImages: '没有图片', maxImages: '每个分类最多10张图片',
        backupRestore: '备份/恢复', pcBackup: '电脑备份（下载）',
        mobileBackup: '手机备份（分享）', restoreData: '恢复数据',
        resetData: '重置数据', resetWarning: '所有数据将被删除，是否继续？',
        
        sun: '日', mon: '一', tue: '二', wed: '三', thu: '四', fri: '五', sat: '六',
        january: '1月', february: '2月', march: '3月', april: '4月',
        may: '5月', june: '6月', july: '7月', august: '8月',
        september: '9月', october: '10月', november: '11月', december: '12月',
        yearMonth: '{year}年{month}',
        fullDate: '{year}年{month}{day}日 星期{weekday}',
        currency: '元',
        currencyFormat: '{amount}元'
    }
};

// Current language
let currentLang = localStorage.getItem('appLanguage') || 'ko';

// Get translation
function t(key) {
    return LANGUAGES[currentLang][key] || LANGUAGES['ko'][key] || key;
}

// Set language
function setLanguage(lang) {
    if (LANGUAGES[lang]) {
        currentLang = lang;
        localStorage.setItem('appLanguage', lang);
        applyLanguage();

        // iframe을 reload → 각 파일이 localStorage에서 언어 읽어서 반영
        const frames = ['todoFrame', 'diaryFrame', 'moneyFrame'];
        frames.forEach(function(id) {
            const frame = document.getElementById(id);
            if (frame && frame.src) {
                try {
                    // postMessage 먼저 시도
                    frame.contentWindow.postMessage({ type: 'languageChange', lang: lang }, '*');
                } catch(e) {}
                // reload로 확실히 반영
                const currentSrc = frame.src;
                frame.src = '';
                setTimeout(function() { frame.src = currentSrc; }, 50);
            }
        });

        // 홈화면 갱신
        if (typeof updateHomeStats === 'function') updateHomeStats();
        if (typeof updateDateDisplay === 'function') updateDateDisplay();

        // 언어 메뉴 닫기
        const menu = document.getElementById('langMenu');
        if (menu) menu.classList.remove('active');
    }
}

// Apply language to elements with data-i18n attribute
function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (el.placeholder !== undefined && el.tagName === 'INPUT') {
            el.placeholder = t(key);
        } else {
            el.textContent = t(key);
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

// Listen for language change from parent
window.addEventListener('message', (event) => {
    if (event.data.type === 'languageChange') {
        currentLang = event.data.lang;
        localStorage.setItem('appLanguage', currentLang);
        applyLanguage();
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
});
