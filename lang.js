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
        page: '페이지',
        todoList: '할 일 목록',
        saveTodayScore: '오늘 점수 저장',
        page: '페이지',
        todoList: '할 일 목록',
        saveTodayScore: '오늘 점수 저장',
        goalPlaceholder: '이곳에 1년간의 성과 달성을 위한 목표와 포부를 기록해보세요...'
        reflectPlaceholder: '목표 달성 과정에서의 성찰, 반성, 성취감 등을 자유롭게 기록해보세요...'
        reminderPlaceholder: '예: 챙겨야 할 생일, 적금 만기일...'
        msgPerfect: 'Perfect! 완벽한 하루! 🎊'
        msgExcellent: 'Excellent! 훌륭해요! 💪'
        msgGood: 'Good job! 잘하고 있어요! 👍'
        msgKeep: 'Keep going! 화이팅! 🔥'
        msgCan: 'You can do it! 할 수 있어요! ✨'
        dateCol: '일자'
        scoreCol: '점수'
        gradeCol: '등급'
        achieveCol: '달성률'
        moodCol: '기분'
        monthCol: '월'
        avgScoreCol: '평균 점수'
        cheerCol: '응원 메시지'
        yearCol: '연도'
        bestRateCol: '최고 달성률'
        statusCol: '상태'
        totalAvg: '총 평균 점수'
        noData: '데이터 수집중'
        thisMonthStats: '이번 달 달성 성과표'
        yearlyStats: '연도별 성과 히스토리'
        goalTitle: '나의 목표 & 성찰 일기'
        goalLabel: '올해의 목표와 포부'
        reflectLabel: '성찰과 달성 기록'
        tipsTitle: '성공과 시간관리'
        tipsSuccess: '성공 팁'
        tipsTime: '시간관리 원칙'
        resetAll: '모든 데이터 초기화'
        reminderAdd: '리마인더 추가'
        reminderList: '리마인더 목록'
        reminderMemoLabel: '메모'
        reminderToday: '오늘의 리마인더'
        bgClick: '배경사진 클릭 +'
        noTodos: '등록된 할 일이 없습니다'
        noReminders: '등록된 리마인더가 없습니다'
        expandStats: '통계 & 설정 페이지 펼치기 (2~7)'
        collapseStats: '통계 & 설정 페이지 접기'
        dailyReset: '매일 자정에 체크박스가 초기화됩니다'
        creditMsg: '나의 신용도 점수, 꾸준히 쌓아가요 ✨'
        jan: '1월'
        feb: '2월'
        mar: '3월'
        apr: '4월'
        may_: '5월'
        jun_: '6월'
        jul_: '7월'
        aug_: '8월'
        sep_: '9월'
        oct_: '10월'
        nov_: '11월'
        dec_: '12월'
        alertNoScore: '저장할 점수가 없습니다!'
        alertNoTodo: '할 일을 입력해주세요!'
        alertMax5: '최대 5개까지만 추가할 수 있습니다.\n기존 항목을 삭제해주세요.'
        alertDeleteTodo: '이 할 일을 삭제하시겠습니까?'
        alertSaved: '저장되었습니다! ✨'
        alertNoContent: '저장할 내용이 없습니다!'
        alertCleared: '내용이 지워졌습니다.'
        alertClearConfirm: '입력된 내용을 모두 지우시겠습니까?'
        alertSaveError: '저장 중 오류가 발생했습니다.'
        alertDateReq: '날짜를 선택해주세요!'
        alertMemoReq: '메모를 입력해주세요!'
        alertReminderAdded: '리마인더가 추가되었습니다! 🔔'
        alertDeleteReminder: '이 리마인더를 삭제하시겠습니까?'
        alertBgChanged: '배경 사진이 변경되었습니다! 🌸'
        alertMicPerm: '마이크 사용 권한이 필요합니다.'
        alertNoSpeech: '이 브라우저는 음성 인식을 지원하지 않습니다.\n크롬 또는 엣지 브라우저를 사용해주세요.'
        alertAllDeleted: '모든 데이터가 삭제되었습니다.'
        alertNewDay: '📋 새로운 하루입니다!\n\n완료된 ${count}개 항목이 정리되었습니다.\n미완료 항목은 그대로 유지됩니다.'
        savedStatus: '✅ 저장됨 - 수정하려면 "수정하기" 버튼을 누르세요'
        editingStatus: '📝 편집 중 - 변경사항을 저장하세요'
        msg0: '오늘의 목표를 달성하고 점수를 획득하세요!'
        addTodo: '추가'
        clear: '입력 지우기'
        editBtn: '수정하기'
                expand: '펼치기 ▶',
        yardExpand: '마당 펼치기',
        cardEditMode: '✏️ 카드 편집',
        usageGuide: '사용 안내',
        
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
        page: 'Page',
        todoList: 'Todo List',
        saveTodayScore: 'Save Score',
        page: 'Page',
        todoList: 'Todo List',
        saveTodayScore: 'Save Score',
        expand: 'Expand ▶',
        yardExpand: 'Expand Section',
        cardEditMode: '✏️ Edit Cards',
        usageGuide: 'Usage Guide',
        
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
        goalPlaceholder: 'Write your goals for this year...',
        reflectPlaceholder: 'Write your reflection and achievements...',
        reminderPlaceholder: 'e.g. Birthday, savings due...',
        msgPerfect: 'Perfect! Amazing day! 🎊',
        msgExcellent: 'Excellent! Great job! 💪',
        msgGood: 'Good job! Keep it up! 👍',
        msgKeep: 'Keep going! Fighting! 🔥',
        msgCan: 'You can do it! ✨',
        dateCol: 'Date', scoreCol: 'Score', gradeCol: 'Grade', achieveCol: 'Rate',
        moodCol: 'Mood', monthCol: 'Month', avgScoreCol: 'Avg Score', cheerCol: 'Message',
        yearCol: 'Year', bestRateCol: 'Best Rate', statusCol: 'Status', totalAvg: 'Overall Avg',
        noData: 'Collecting...', thisMonthStats: 'Monthly Achievement',
        monthlyStats: 'Monthly Statistics', yearlyStats: 'Yearly History',
        goalTitle: 'My Goals & Reflection', goalLabel: 'Goals & Ambitions',
        reflectLabel: 'Reflection & Achievement', tipsTitle: 'Success & Time Management',
        tipsSuccess: 'Success Tips', tipsTime: 'Time Management',
        resetAll: 'Reset All Data', reminderAdd: 'Add Reminder',
        reminderList: 'Reminders', reminderMemoLabel: 'Memo',
        reminderToday: 'Today\'s Reminders', bgClick: 'Click background +',
        noTodos: 'No todos', noReminders: 'No reminders',
        expandStats: 'Expand Statistics (2~7)', collapseStats: 'Collapse Statistics',
        dailyReset: 'Checkboxes reset at midnight',
        creditMsg: 'Build your credit score steadily ✨',
        jan:'Jan', feb:'Feb', mar:'Mar', apr:'Apr', may_:'May', jun_:'Jun',
        jul_:'Jul', aug_:'Aug', sep_:'Sep', oct_:'Oct', nov_:'Nov', dec_:'Dec',
        alertNoScore: 'No score to save!', alertNoTodo: 'Please enter a todo!',
        alertMax5: 'Max 5 items.\nPlease delete existing items.',
        alertDeleteTodo: 'Delete this todo?', alertSaved: 'Saved! ✨',
        alertNoContent: 'No content to save!', alertCleared: 'Content cleared.',
        alertClearConfirm: 'Clear all content?', alertSaveError: 'Error saving data.',
        alertDateReq: 'Please select a date!', alertMemoReq: 'Please enter a memo!',
        alertReminderAdded: 'Reminder added! 🔔', alertDeleteReminder: 'Delete this reminder?',
        alertBgChanged: 'Background changed! 🌸', alertMicPerm: 'Microphone permission required.',
        alertNoSpeech: 'Speech recognition not supported.\nPlease use Chrome or Edge.',
        alertAllDeleted: 'All data deleted.',
        alertNewDay: '📋 New day!\n\n${count} completed items cleared.\nIncomplete items remain.',
        savedStatus: '✅ Saved - Click "Edit" to modify',
        editingStatus: '📝 Editing - Please save changes',
        todoList: 'Todo List', addTodo: 'Add', page: 'Page',
        save: 'Save', clear: 'Clear', editBtn: 'Edit', confirm: 'Confirm',
        todayScore: "Today\'s Score", saveTodayScore: 'Save Score',
        msg0: 'Complete your goals and earn points!',
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
        currencyFormat: '{amount}円',
        page: 'ページ',
        todoList: 'タスクリスト',
        saveTodayScore: 'スコアを保存',
        page: 'ページ',
        todoList: 'タスクリスト',
        saveTodayScore: 'スコアを保存',
        expand: '展開 ▶',
        yardExpand: '庭を展開',
        cardEditMode: '✏️ カード編集',
        goalPlaceholder: '今年の目標と抱負を記録してください...',
        reflectPlaceholder: '振り返りと達成感を自由に記録...',
        reminderPlaceholder: '例: 誕生日、満期日...',
        msgPerfect: 'パーフェクト！完璧な一日！ 🎊',
        msgExcellent: 'エクセレント！素晴らしい！ 💪',
        msgGood: 'グッジョブ！よくできました！ 👍',
        msgKeep: 'がんばって！ファイト！ 🔥',
        msgCan: 'できるよ！頑張って！ ✨',
        dateCol: '日付', scoreCol: 'スコア', gradeCol: '等級', achieveCol: '達成率',
        moodCol: '気分', monthCol: '月', avgScoreCol: '平均スコア', cheerCol: '応援メッセージ',
        yearCol: '年度', bestRateCol: '最高達成率', statusCol: '状態', totalAvg: '総平均スコア',
        noData: 'データ収集中', thisMonthStats: '今月の達成成績表',
        monthlyStats: '月別統計', yearlyStats: '年別履歴',
        goalTitle: '私の目標と振り返り', goalLabel: '今年の目標と抱負',
        reflectLabel: '振り返りと達成記録', tipsTitle: '成功と時間管理',
        tipsSuccess: '成功のコツ', tipsTime: '時間管理の原則',
        resetAll: 'データリセット', reminderAdd: 'リマインダー追加',
        reminderList: 'リマインダーリスト', reminderMemoLabel: 'メモ',
        reminderToday: '今日のリマインダー', bgClick: '背景写真クリック +',
        noTodos: 'タスクがありません', noReminders: 'リマインダーがありません',
        expandStats: '統計ページ展開 (2~7)', collapseStats: '統計ページを閉じる',
        dailyReset: '毎日深夜にリセットされます',
        creditMsg: '信用スコアを積み上げよう ✨',
        jan:'1月', feb:'2月', mar:'3月', apr:'4月', may_:'5月', jun_:'6月',
        jul_:'7月', aug_:'8月', sep_:'9月', oct_:'10月', nov_:'11月', dec_:'12月',
        alertNoScore: '保存するスコアがありません！', alertNoTodo: 'タスクを入力してください！',
        alertMax5: '最大5件まで。\n既存の項目を削除してください。',
        alertDeleteTodo: 'このタスクを削除しますか？', alertSaved: '保存されました！ ✨',
        alertNoContent: '保存する内容がありません！', alertCleared: '内容が消されました。',
        alertClearConfirm: 'すべての内容を消しますか？', alertSaveError: '保存中にエラーが発生しました。',
        alertDateReq: '日付を選択してください！', alertMemoReq: 'メモを入力してください！',
        alertReminderAdded: 'リマインダーが追加されました！ 🔔', alertDeleteReminder: 'このリマインダーを削除しますか？',
        alertBgChanged: '背景写真が変更されました！ 🌸', alertMicPerm: 'マイクの権限が必要です。',
        alertNoSpeech: 'このブラウザは音声認識をサポートしていません。\nChromeまたはEdgeを使用してください。',
        alertAllDeleted: 'データが削除されました。',
        alertNewDay: '📋 新しい一日です！\n\n完了した${count}件が整理されました。\n未完了の項目はそのまま残ります。',
        savedStatus: '✅ 保存済 - 修正するには「修正する」を押してください',
        editingStatus: '📝 編集中 - 変更を保存してください',
        todoList: 'タスクリスト', addTodo: '追加', page: 'ページ',
        save: '保存する', clear: '入力を消す', editBtn: '修正する', confirm: '確認',
        todayScore: '今日のスコア', saveTodayScore: 'スコアを保存',
        msg0: '目標を達成してポイントを獲得しよう！',
        usageGuide: '使用案内'
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
        currencyFormat: '{amount}元',
        page: '页面',
        todoList: '待办列表',
        saveTodayScore: '保存分数',
        page: '页面',
        todoList: '待办列表',
        saveTodayScore: '保存分数',
        expand: '展開 ▶',
        yardExpand: '展開庭院',
        cardEditMode: '✏️ 卡片編輯',
        goalPlaceholder: '记录今年的目标与抱负...',
        reflectPlaceholder: '自由记录反思与成就...',
        reminderPlaceholder: '例如: 生日、到期日...',
        msgPerfect: '完美！完美的一天！ 🎊',
        msgExcellent: '优秀！太棒了！ 💪',
        msgGood: '好样的！继续努力！ 👍',
        msgKeep: '加油！继续努力！ 🔥',
        msgCan: '你能做到！ ✨',
        dateCol: '日期', scoreCol: '分数', gradeCol: '等级', achieveCol: '达成率',
        moodCol: '心情', monthCol: '月', avgScoreCol: '平均分数', cheerCol: '鼓励消息',
        yearCol: '年份', bestRateCol: '最高达成率', statusCol: '状态', totalAvg: '总平均分数',
        noData: '数据收集中', thisMonthStats: '本月达成成绩',
        monthlyStats: '月度统计', yearlyStats: '年度历史',
        goalTitle: '我的目标与反思', goalLabel: '今年的目标与抱负',
        reflectLabel: '反思与达成记录', tipsTitle: '成功与时间管理',
        tipsSuccess: '成功技巧', tipsTime: '时间管理原则',
        resetAll: '重置所有数据', reminderAdd: '添加提醒',
        reminderList: '提醒列表', reminderMemoLabel: '备注',
        reminderToday: '今日提醒', bgClick: '点击背景 +',
        noTodos: '没有待办事项', noReminders: '没有提醒',
        expandStats: '展开统计 (2~7)', collapseStats: '收起统计',
        dailyReset: '每天午夜重置复选框',
        creditMsg: '稳步积累你的信用分数 ✨',
        jan:'1月', feb:'2月', mar:'3月', apr:'4月', may_:'5月', jun_:'6月',
        jul_:'7月', aug_:'8月', sep_:'9月', oct_:'10月', nov_:'11月', dec_:'12月',
        alertNoScore: '没有可保存的分数！', alertNoTodo: '请输入待办！',
        alertMax5: '最多5项。\n请删除现有项目。',
        alertDeleteTodo: '删除此待办？', alertSaved: '已保存！ ✨',
        alertNoContent: '没有可保存的内容！', alertCleared: '内容已清除。',
        alertClearConfirm: '清除所有内容？', alertSaveError: '保存时出错。',
        alertDateReq: '请选择日期！', alertMemoReq: '请输入备注！',
        alertReminderAdded: '提醒已添加！ 🔔', alertDeleteReminder: '删除此提醒？',
        alertBgChanged: '背景已更改！ 🌸', alertMicPerm: '需要麦克风权限。',
        alertNoSpeech: '此浏览器不支持语音识别。\n请使用Chrome或Edge。',
        alertAllDeleted: '所有数据已删除。',
        alertNewDay: '📋 新的一天！\n\n${count}个已完成项目已清除。\n未完成项目保持不变。',
        savedStatus: '✅ 已保存 - 点击"修改"进行编辑',
        editingStatus: '📝 编辑中 - 请保存更改',
        todoList: '待办列表', addTodo: '添加', page: '页面',
        save: '保存', clear: '清除', editBtn: '修改', confirm: '确认',
        todayScore: '今日分数', saveTodayScore: '保存分数',
        msg0: '完成目标并获得积分！',
        usageGuide: '使用指南'
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
        
        // iframe src 변경
        const suffix = lang === 'en' ? '-en' : (lang === 'ja' ? '-ja' : (lang === 'zh' ? '-zh' : ''));
        const todoFrame = document.getElementById('todoFrame');
        const diaryFrame = document.getElementById('diaryFrame');
        const moneyFrame = document.getElementById('moneyFrame');
        
        if (todoFrame) {
            todoFrame.src = 'todo' + suffix + '.html';
            todoFrame.onload = function() {
                todoFrame.contentWindow.postMessage({ type: 'languageChange', lang: lang }, '*');
            };
        }
        if (diaryFrame) {
            diaryFrame.src = 'diary' + suffix + '.html';
            diaryFrame.onload = function() {
                diaryFrame.contentWindow.postMessage({ type: 'languageChange', lang: lang }, '*');
            };
        }
        if (moneyFrame) {
            moneyFrame.src = 'money' + suffix + '.html';
            moneyFrame.onload = function() {
                moneyFrame.contentWindow.postMessage({ type: 'languageChange', lang: lang }, '*');
            };
        }
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
