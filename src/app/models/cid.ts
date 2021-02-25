export enum Cid {
    // work-shop  组件
    PRODUCTION_PLAN = 1,
    SINGLE_MONTH_ORDER_COMPLETION = 2,
    SINGLE_MONTH_ORDER_OVERDUE = 3,
    PLANNED_AND_ACTUAL_PRODUCTION_OF_THE_DAY = 4,
    SEVEN_DAY_DATA_ANALYSIS = 5,
    SEVEN_DAY_OFF_LINE_PROCESS = 6,
    SEVEN_DAY_FIX_REACTION = 7,
    EQUIPMENT_OPERATION = 8,
    TODAY_PASS_RATE_ANALYSIS = 9,
    TODAY_COMPLETED_RATE_ANALYSIS = 10,
    TODAY_REFIX_RATE_ANALYSIS = 11,
    WORKSHOP_CONSUME_POWER_ANALYSIS = 12,
    APP_MES_BAR = 63,
    INVENTORY_WARNING = 66,
    TODAY_EFFICIENCY_ANALYSIS = 68,

    //  app-efficiency-management 组件
    ORDER_DETAILS = 25,
    DAILY_OUTPUT = 26,
    WEEK_OUTPUT = 27,
    EFFICIENCY_PROGRESS = 28,
    EFFICIENCY_STAR = 29,

    // app-pie-con 组件
    PIE_CON = 52, // pie 图
    //  app-total-five 组件
    TOTAL_FIVE = 53, // 数据

    // app-globalstatus 组件
    PATAMS_RANKCLASS = 59,
    params_orderrank = 56,
    PARAMS_ORDERTOTAL = 54,
    PATAMS_MAP = 55,
    PARAMS_RANKSALE = 60,
    PARAMS_RINGINFO = 60,
    PARAMS_RANKSTYLE = 58,

    // app-mes-class 组件
    MES_CLASS = 61,

    // app-mes-table 组件
    MES_TABLE = 62,

    // app-schedule 组件
    APP_SCHEDULE = 64,

    // app-pmc-class 组件
    APP_PMC_CLASS = 65,

    // app-plan-class 组件
    APP_PLAN_CLASS = 67,

    // plm-design-center 组件
    PLM_DESIGN_CENTER = 9101, // 柱状图 plm-design-center
    PLM_DESIGN_CENTER_TABLE = 9102, // table  app-month-done

    // 路由 quality
    QUALITY_PLAN = 30, // 车间生产品质管控看板 orderDetail
    BACK_NUM = 31, // 车间生产品质管控看板 右侧 人员+返工数
    QUALITY_DEFECT = 32, // 车间生产品质管控看板 右侧-疵点图
    QUALITY_PIE = 33, // 车间生产品质管控看板 右侧-饼状图

    // 路由 production
    PRODUCTION_DAYRESULTDATA = 13, // 生产制造执行系统大数据看板 production 日指标监控
    PRODUCTION_TABLEOFPRODUCT = 14, // 生产制造执行系统大数据看板 production 表格数据  生产进度监控
    PRODUCTION_QUALIFIED = 15, // 生产制造执行系统大数据看板 production 表格数据  车间生产合格率分析
    WORDSHOP_QUALIFIED = 16, // 生产制造执行系统大数据看板 production 获取图表数据  车间生产合格率分析
    ACHIEVE_GOAL = 17, // 生产制造执行系统大数据看板 production 获取图表数据  车间近7天目标完成情况分析
    MONTH_GOAL = 18, // 生产制造执行系统大数据看板 production 获取图表数据  车间月目标完成情况分析
    TOP_THREE = 19, // 生产制造执行系统大数据看板 production 今日完工Top3
    MONTH_GOAL_1 = 20, // 生产制造执行系统大数据看板 production 月指标分析  1
    MONTH_GOAL_2 = 21, // 生产制造执行系统大数据看板 production 月指标分析  2
    MONTH_GOAL_3 = 22, // 生产制造执行系统大数据看板 production 月指标分析  3
    MONTH_GOAL_4 = 23, // 生产制造执行系统大数据看板 production 月指标分析  4
    REPERTORY = 24, // 生产制造执行系统大数据看板 production 在制品库存分析
}
