//JSON month and year need to be manually updated every month
// see instructions on G drive for how to create new JSONs

var stats =
[{"SUM_Fatalities":15,"SUM_Injuries":3963,"SUM_PedFat":14,"SUM_PedInj":993,"SUM_BikeFat":0,"SUM_BikeInj":91,"SUM_MVOFat":1,"SUM_MVOInj":2879,"Year":2009,"Month":1},
{"SUM_Fatalities":20,"SUM_Injuries":3623,"SUM_PedFat":15,"SUM_PedInj":935,"SUM_BikeFat":0,"SUM_BikeInj":130,"SUM_MVOFat":5,"SUM_MVOInj":2558,"Year":2009,"Month":2},
{"SUM_Fatalities":8,"SUM_Injuries":4187,"SUM_PedFat":6,"SUM_PedInj":992,"SUM_BikeFat":1,"SUM_BikeInj":188,"SUM_MVOFat":1,"SUM_MVOInj":3007,"Year":2009,"Month":3},
{"SUM_Fatalities":30,"SUM_Injuries":4659,"SUM_PedFat":13,"SUM_PedInj":1001,"SUM_BikeFat":1,"SUM_BikeInj":237,"SUM_MVOFat":16,"SUM_MVOInj":3421,"Year":2009,"Month":4},
{"SUM_Fatalities":32,"SUM_Injuries":5183,"SUM_PedFat":19,"SUM_PedInj":1013,"SUM_BikeFat":3,"SUM_BikeInj":298,"SUM_MVOFat":10,"SUM_MVOInj":3872,"Year":2009,"Month":5},
{"SUM_Fatalities":20,"SUM_Injuries":5138,"SUM_PedFat":10,"SUM_PedInj":943,"SUM_BikeFat":2,"SUM_BikeInj":368,"SUM_MVOFat":8,"SUM_MVOInj":3827,"Year":2009,"Month":6},
{"SUM_Fatalities":18,"SUM_Injuries":5302,"SUM_PedFat":11,"SUM_PedInj":899,"SUM_BikeFat":0,"SUM_BikeInj":476,"SUM_MVOFat":7,"SUM_MVOInj":3927,"Year":2009,"Month":7},
{"SUM_Fatalities":29,"SUM_Injuries":4946,"SUM_PedFat":14,"SUM_PedInj":899,"SUM_BikeFat":3,"SUM_BikeInj":475,"SUM_MVOFat":12,"SUM_MVOInj":3572,"Year":2009,"Month":8},
{"SUM_Fatalities":20,"SUM_Injuries":4800,"SUM_PedFat":14,"SUM_PedInj":942,"SUM_BikeFat":1,"SUM_BikeInj":337,"SUM_MVOFat":5,"SUM_MVOInj":3521,"Year":2009,"Month":9},
{"SUM_Fatalities":26,"SUM_Injuries":5127,"SUM_PedFat":13,"SUM_PedInj":1154,"SUM_BikeFat":0,"SUM_BikeInj":311,"SUM_MVOFat":13,"SUM_MVOInj":3662,"Year":2009,"Month":10},
{"SUM_Fatalities":23,"SUM_Injuries":4597,"SUM_PedFat":18,"SUM_PedInj":989,"SUM_BikeFat":0,"SUM_BikeInj":247,"SUM_MVOFat":5,"SUM_MVOInj":3361,"Year":2009,"Month":11},
{"SUM_Fatalities":19,"SUM_Injuries":4436,"SUM_PedFat":11,"SUM_PedInj":1168,"SUM_BikeFat":1,"SUM_BikeInj":129,"SUM_MVOFat":7,"SUM_MVOInj":3139,"Year":2009,"Month":12},
{"SUM_Fatalities":29,"SUM_Injuries":4245,"SUM_PedFat":22,"SUM_PedInj":1068,"SUM_BikeFat":1,"SUM_BikeInj":136,"SUM_MVOFat":6,"SUM_MVOInj":3041,"Year":2010,"Month":1},
{"SUM_Fatalities":12,"SUM_Injuries":3514,"SUM_PedFat":9,"SUM_PedInj":926,"SUM_BikeFat":1,"SUM_BikeInj":117,"SUM_MVOFat":2,"SUM_MVOInj":2471,"Year":2010,"Month":2},
{"SUM_Fatalities":17,"SUM_Injuries":4404,"SUM_PedFat":10,"SUM_PedInj":1043,"SUM_BikeFat":2,"SUM_BikeInj":223,"SUM_MVOFat":5,"SUM_MVOInj":3138,"Year":2010,"Month":3},
{"SUM_Fatalities":22,"SUM_Injuries":4882,"SUM_PedFat":13,"SUM_PedInj":995,"SUM_BikeFat":2,"SUM_BikeInj":315,"SUM_MVOFat":7,"SUM_MVOInj":3572,"Year":2010,"Month":4},
{"SUM_Fatalities":30,"SUM_Injuries":5438,"SUM_PedFat":13,"SUM_PedInj":1002,"SUM_BikeFat":2,"SUM_BikeInj":396,"SUM_MVOFat":15,"SUM_MVOInj":4040,"Year":2010,"Month":5},
{"SUM_Fatalities":24,"SUM_Injuries":5658,"SUM_PedFat":8,"SUM_PedInj":975,"SUM_BikeFat":0,"SUM_BikeInj":507,"SUM_MVOFat":16,"SUM_MVOInj":4176,"Year":2010,"Month":6},
{"SUM_Fatalities":22,"SUM_Injuries":5316,"SUM_PedFat":9,"SUM_PedInj":853,"SUM_BikeFat":4,"SUM_BikeInj":489,"SUM_MVOFat":9,"SUM_MVOInj":3974,"Year":2010,"Month":7},
{"SUM_Fatalities":25,"SUM_Injuries":5291,"SUM_PedFat":7,"SUM_PedInj":880,"SUM_BikeFat":3,"SUM_BikeInj":474,"SUM_MVOFat":15,"SUM_MVOInj":3937,"Year":2010,"Month":8},
{"SUM_Fatalities":30,"SUM_Injuries":5304,"SUM_PedFat":19,"SUM_PedInj":984,"SUM_BikeFat":2,"SUM_BikeInj":474,"SUM_MVOFat":9,"SUM_MVOInj":3846,"Year":2010,"Month":9},
{"SUM_Fatalities":23,"SUM_Injuries":5343,"SUM_PedFat":16,"SUM_PedInj":1193,"SUM_BikeFat":1,"SUM_BikeInj":395,"SUM_MVOFat":6,"SUM_MVOInj":3755,"Year":2010,"Month":10},
{"SUM_Fatalities":25,"SUM_Injuries":4867,"SUM_PedFat":18,"SUM_PedInj":1116,"SUM_BikeFat":0,"SUM_BikeInj":296,"SUM_MVOFat":7,"SUM_MVOInj":3455,"Year":2010,"Month":11},
{"SUM_Fatalities":12,"SUM_Injuries":4198,"SUM_PedFat":8,"SUM_PedInj":1011,"SUM_BikeFat":1,"SUM_BikeInj":168,"SUM_MVOFat":3,"SUM_MVOInj":3019,"Year":2010,"Month":12},
{"SUM_Fatalities":18,"SUM_Injuries":3647,"SUM_PedFat":10,"SUM_PedInj":941,"SUM_BikeFat":2,"SUM_BikeInj":95,"SUM_MVOFat":6,"SUM_MVOInj":2611,"Year":2011,"Month":1},
{"SUM_Fatalities":17,"SUM_Injuries":3275,"SUM_PedFat":14,"SUM_PedInj":862,"SUM_BikeFat":0,"SUM_BikeInj":124,"SUM_MVOFat":3,"SUM_MVOInj":2289,"Year":2011,"Month":2},
{"SUM_Fatalities":16,"SUM_Injuries":4377,"SUM_PedFat":9,"SUM_PedInj":1050,"SUM_BikeFat":2,"SUM_BikeInj":215,"SUM_MVOFat":5,"SUM_MVOInj":3112,"Year":2011,"Month":3},
{"SUM_Fatalities":23,"SUM_Injuries":4199,"SUM_PedFat":13,"SUM_PedInj":874,"SUM_BikeFat":2,"SUM_BikeInj":263,"SUM_MVOFat":8,"SUM_MVOInj":3062,"Year":2011,"Month":4},
{"SUM_Fatalities":12,"SUM_Injuries":5159,"SUM_PedFat":7,"SUM_PedInj":1065,"SUM_BikeFat":1,"SUM_BikeInj":389,"SUM_MVOFat":4,"SUM_MVOInj":3705,"Year":2011,"Month":5},
{"SUM_Fatalities":16,"SUM_Injuries":5067,"SUM_PedFat":10,"SUM_PedInj":935,"SUM_BikeFat":3,"SUM_BikeInj":524,"SUM_MVOFat":3,"SUM_MVOInj":3608,"Year":2011,"Month":6},
{"SUM_Fatalities":25,"SUM_Injuries":5388,"SUM_PedFat":11,"SUM_PedInj":880,"SUM_BikeFat":3,"SUM_BikeInj":522,"SUM_MVOFat":11,"SUM_MVOInj":3986,"Year":2011,"Month":7},
{"SUM_Fatalities":21,"SUM_Injuries":4842,"SUM_PedFat":5,"SUM_PedInj":864,"SUM_BikeFat":5,"SUM_BikeInj":448,"SUM_MVOFat":11,"SUM_MVOInj":3530,"Year":2011,"Month":8},
{"SUM_Fatalities":26,"SUM_Injuries":4917,"SUM_PedFat":15,"SUM_PedInj":940,"SUM_BikeFat":1,"SUM_BikeInj":394,"SUM_MVOFat":10,"SUM_MVOInj":3583,"Year":2011,"Month":9},
{"SUM_Fatalities":27,"SUM_Injuries":5012,"SUM_PedFat":16,"SUM_PedInj":1175,"SUM_BikeFat":1,"SUM_BikeInj":350,"SUM_MVOFat":10,"SUM_MVOInj":3487,"Year":2011,"Month":10},
{"SUM_Fatalities":19,"SUM_Injuries":4760,"SUM_PedFat":13,"SUM_PedInj":1197,"SUM_BikeFat":1,"SUM_BikeInj":256,"SUM_MVOFat":5,"SUM_MVOInj":3307,"Year":2011,"Month":11},
{"SUM_Fatalities":29,"SUM_Injuries":4898,"SUM_PedFat":19,"SUM_PedInj":1238,"SUM_BikeFat":1,"SUM_BikeInj":206,"SUM_MVOFat":9,"SUM_MVOInj":3454,"Year":2011,"Month":12},
{"SUM_Fatalities":24,"SUM_Injuries":4226,"SUM_PedFat":16,"SUM_PedInj":1049,"SUM_BikeFat":1,"SUM_BikeInj":185,"SUM_MVOFat":7,"SUM_MVOInj":2992,"Year":2012,"Month":1},
{"SUM_Fatalities":20,"SUM_Injuries":3864,"SUM_PedFat":11,"SUM_PedInj":995,"SUM_BikeFat":1,"SUM_BikeInj":182,"SUM_MVOFat":8,"SUM_MVOInj":2687,"Year":2012,"Month":2},
{"SUM_Fatalities":22,"SUM_Injuries":4581,"SUM_PedFat":11,"SUM_PedInj":892,"SUM_BikeFat":1,"SUM_BikeInj":240,"SUM_MVOFat":10,"SUM_MVOInj":3449,"Year":2012,"Month":3},
{"SUM_Fatalities":26,"SUM_Injuries":4741,"SUM_PedFat":12,"SUM_PedInj":938,"SUM_BikeFat":4,"SUM_BikeInj":324,"SUM_MVOFat":10,"SUM_MVOInj":3479,"Year":2012,"Month":4},
{"SUM_Fatalities":26,"SUM_Injuries":4793,"SUM_PedFat":15,"SUM_PedInj":905,"SUM_BikeFat":1,"SUM_BikeInj":376,"SUM_MVOFat":10,"SUM_MVOInj":3512,"Year":2012,"Month":5},
{"SUM_Fatalities":25,"SUM_Injuries":4942,"SUM_PedFat":11,"SUM_PedInj":958,"SUM_BikeFat":3,"SUM_BikeInj":385,"SUM_MVOFat":11,"SUM_MVOInj":3599,"Year":2012,"Month":6},
{"SUM_Fatalities":24,"SUM_Injuries":4854,"SUM_PedFat":8,"SUM_PedInj":854,"SUM_BikeFat":3,"SUM_BikeInj":450,"SUM_MVOFat":13,"SUM_MVOInj":3550,"Year":2012,"Month":7},
{"SUM_Fatalities":25,"SUM_Injuries":4750,"SUM_PedFat":13,"SUM_PedInj":850,"SUM_BikeFat":1,"SUM_BikeInj":507,"SUM_MVOFat":11,"SUM_MVOInj":3393,"Year":2012,"Month":8},
{"SUM_Fatalities":26,"SUM_Injuries":4688,"SUM_PedFat":14,"SUM_PedInj":893,"SUM_BikeFat":1,"SUM_BikeInj":433,"SUM_MVOFat":11,"SUM_MVOInj":3362,"Year":2012,"Month":9},
{"SUM_Fatalities":22,"SUM_Injuries":4572,"SUM_PedFat":14,"SUM_PedInj":979,"SUM_BikeFat":2,"SUM_BikeInj":332,"SUM_MVOFat":6,"SUM_MVOInj":3261,"Year":2012,"Month":10},
{"SUM_Fatalities":11,"SUM_Injuries":3994,"SUM_PedFat":7,"SUM_PedInj":1037,"SUM_BikeFat":0,"SUM_BikeInj":276,"SUM_MVOFat":4,"SUM_MVOInj":2681,"Year":2012,"Month":11},
{"SUM_Fatalities":27,"SUM_Injuries":4587,"SUM_PedFat":19,"SUM_PedInj":1294,"SUM_BikeFat":0,"SUM_BikeInj":212,"SUM_MVOFat":8,"SUM_MVOInj":3081,"Year":2012,"Month":12},
{"SUM_Fatalities":28,"SUM_Injuries":4043,"SUM_PedFat":20,"SUM_PedInj":1113,"SUM_BikeFat":1,"SUM_BikeInj":192,"SUM_MVOFat":7,"SUM_MVOInj":2738,"Year":2013,"Month":1},
{"SUM_Fatalities":19,"SUM_Injuries":3562,"SUM_PedFat":14,"SUM_PedInj":984,"SUM_BikeFat":0,"SUM_BikeInj":131,"SUM_MVOFat":5,"SUM_MVOInj":2447,"Year":2013,"Month":2},
{"SUM_Fatalities":23,"SUM_Injuries":4186,"SUM_PedFat":14,"SUM_PedInj":987,"SUM_BikeFat":1,"SUM_BikeInj":195,"SUM_MVOFat":8,"SUM_MVOInj":3004,"Year":2013,"Month":3},
{"SUM_Fatalities":17,"SUM_Injuries":4437,"SUM_PedFat":14,"SUM_PedInj":901,"SUM_BikeFat":0,"SUM_BikeInj":290,"SUM_MVOFat":3,"SUM_MVOInj":3246,"Year":2013,"Month":4},
{"SUM_Fatalities":14,"SUM_Injuries":5025,"SUM_PedFat":6,"SUM_PedInj":982,"SUM_BikeFat":2,"SUM_BikeInj":400,"SUM_MVOFat":6,"SUM_MVOInj":3643,"Year":2013,"Month":5},
{"SUM_Fatalities":24,"SUM_Injuries":5110,"SUM_PedFat":12,"SUM_PedInj":972,"SUM_BikeFat":3,"SUM_BikeInj":508,"SUM_MVOFat":9,"SUM_MVOInj":3630,"Year":2013,"Month":6},
{"SUM_Fatalities":25,"SUM_Injuries":5088,"SUM_PedFat":14,"SUM_PedInj":854,"SUM_BikeFat":0,"SUM_BikeInj":470,"SUM_MVOFat":11,"SUM_MVOInj":3764,"Year":2013,"Month":7},
{"SUM_Fatalities":31,"SUM_Injuries":4847,"SUM_PedFat":12,"SUM_PedInj":855,"SUM_BikeFat":1,"SUM_BikeInj":524,"SUM_MVOFat":18,"SUM_MVOInj":3468,"Year":2013,"Month":8},
{"SUM_Fatalities":28,"SUM_Injuries":4992,"SUM_PedFat":15,"SUM_PedInj":999,"SUM_BikeFat":0,"SUM_BikeInj":479,"SUM_MVOFat":13,"SUM_MVOInj":3514,"Year":2013,"Month":9},
{"SUM_Fatalities":24,"SUM_Injuries":4842,"SUM_PedFat":16,"SUM_PedInj":1066,"SUM_BikeFat":2,"SUM_BikeInj":429,"SUM_MVOFat":6,"SUM_MVOInj":3347,"Year":2013,"Month":10},
{"SUM_Fatalities":36,"SUM_Injuries":4704,"SUM_PedFat":26,"SUM_PedInj":1106,"SUM_BikeFat":2,"SUM_BikeInj":281,"SUM_MVOFat":8,"SUM_MVOInj":3317,"Year":2013,"Month":11},
{"SUM_Fatalities":30,"SUM_Injuries":4285,"SUM_PedFat":21,"SUM_PedInj":1167,"SUM_BikeFat":0,"SUM_BikeInj":175,"SUM_MVOFat":9,"SUM_MVOInj":2943,"Year":2013,"Month":12},
{"SUM_Fatalities":23,"SUM_Injuries":3920,"SUM_PedFat":13,"SUM_PedInj":1080,"SUM_BikeFat":1,"SUM_BikeInj":120,"SUM_MVOFat":9,"SUM_MVOInj":2720,"Year":2014,"Month":1},
{"SUM_Fatalities":11,"SUM_Injuries":3106,"SUM_PedFat":7,"SUM_PedInj":821,"SUM_BikeFat":1,"SUM_BikeInj":94,"SUM_MVOFat":3,"SUM_MVOInj":2191,"Year":2014,"Month":2},
{"SUM_Fatalities":17,"SUM_Injuries":3841,"SUM_PedFat":12,"SUM_PedInj":956,"SUM_BikeFat":0,"SUM_BikeInj":190,"SUM_MVOFat":5,"SUM_MVOInj":2695,"Year":2014,"Month":3},
{"SUM_Fatalities":21,"SUM_Injuries":4028,"SUM_PedFat":8,"SUM_PedInj":856,"SUM_BikeFat":2,"SUM_BikeInj":306,"SUM_MVOFat":11,"SUM_MVOInj":2866,"Year":2014,"Month":4},
{"SUM_Fatalities":23,"SUM_Injuries":4636,"SUM_PedFat":9,"SUM_PedInj":883,"SUM_BikeFat":2,"SUM_BikeInj":385,"SUM_MVOFat":12,"SUM_MVOInj":3368,"Year":2014,"Month":5},
{"SUM_Fatalities":19,"SUM_Injuries":4967,"SUM_PedFat":7,"SUM_PedInj":942,"SUM_BikeFat":3,"SUM_BikeInj":472,"SUM_MVOFat":9,"SUM_MVOInj":3553,"Year":2014,"Month":6},
{"SUM_Fatalities":29,"SUM_Injuries":4586,"SUM_PedFat":15,"SUM_PedInj":769,"SUM_BikeFat":3,"SUM_BikeInj":533,"SUM_MVOFat":11,"SUM_MVOInj":3284,"Year":2014,"Month":7},
{"SUM_Fatalities":22,"SUM_Injuries":4452,"SUM_PedFat":10,"SUM_PedInj":723,"SUM_BikeFat":4,"SUM_BikeInj":499,"SUM_MVOFat":8,"SUM_MVOInj":3230,"Year":2014,"Month":8},
{"SUM_Fatalities":32,"SUM_Injuries":4440,"SUM_PedFat":17,"SUM_PedInj":750,"SUM_BikeFat":1,"SUM_BikeInj":485,"SUM_MVOFat":14,"SUM_MVOInj":3205,"Year":2014,"Month":9},
{"SUM_Fatalities":22,"SUM_Injuries":4703,"SUM_PedFat":17,"SUM_PedInj":975,"SUM_BikeFat":1,"SUM_BikeInj":430,"SUM_MVOFat":4,"SUM_MVOInj":3298,"Year":2014,"Month":10},
{"SUM_Fatalities":23,"SUM_Injuries":4227,"SUM_PedFat":12,"SUM_PedInj":1017,"SUM_BikeFat":2,"SUM_BikeInj":279,"SUM_MVOFat":9,"SUM_MVOInj":2931,"Year":2014,"Month":11},
{"SUM_Fatalities":16,"SUM_Injuries":4138,"SUM_PedFat":13,"SUM_PedInj":1216,"SUM_BikeFat":0,"SUM_BikeInj":189,"SUM_MVOFat":3,"SUM_MVOInj":2733,"Year":2014,"Month":12},
{"SUM_Fatalities":16,"SUM_Injuries":3585,"SUM_PedFat":9,"SUM_PedInj":924,"SUM_BikeFat":1,"SUM_BikeInj":119,"SUM_MVOFat":6,"SUM_MVOInj":2542,"Year":2015,"Month":1},
{"SUM_Fatalities":14,"SUM_Injuries":3110,"SUM_PedFat":11,"SUM_PedInj":770,"SUM_BikeFat":0,"SUM_BikeInj":83,"SUM_MVOFat":3,"SUM_MVOInj":2257,"Year":2015,"Month":2},
{"SUM_Fatalities":11,"SUM_Injuries":3819,"SUM_PedFat":6,"SUM_PedInj":824,"SUM_BikeFat":0,"SUM_BikeInj":167,"SUM_MVOFat":5,"SUM_MVOInj":2828,"Year":2015,"Month":3},
{"SUM_Fatalities":17,"SUM_Injuries":4027,"SUM_PedFat":5,"SUM_PedInj":719,"SUM_BikeFat":2,"SUM_BikeInj":317,"SUM_MVOFat":10,"SUM_MVOInj":2991,"Year":2015,"Month":4},
{"SUM_Fatalities":29,"SUM_Injuries":4983,"SUM_PedFat":19,"SUM_PedInj":835,"SUM_BikeFat":1,"SUM_BikeInj":488,"SUM_MVOFat":9,"SUM_MVOInj":3660,"Year":2015,"Month":5},
{"SUM_Fatalities":20,"SUM_Injuries":4983,"SUM_PedFat":13,"SUM_PedInj":798,"SUM_BikeFat":1,"SUM_BikeInj":474,"SUM_MVOFat":6,"SUM_MVOInj":3711,"Year":2015,"Month":6},
{"SUM_Fatalities":19,"SUM_Injuries":4931,"SUM_PedFat":5,"SUM_PedInj":727,"SUM_BikeFat":4,"SUM_BikeInj":590,"SUM_MVOFat":10,"SUM_MVOInj":3614,"Year":2015,"Month":7},
{"SUM_Fatalities":22,"SUM_Injuries":4922,"SUM_PedFat":11,"SUM_PedInj":751,"SUM_BikeFat":2,"SUM_BikeInj":583,"SUM_MVOFat":9,"SUM_MVOInj":3588,"Year":2015,"Month":8},
{"SUM_Fatalities":10,"SUM_Injuries":4626,"SUM_PedFat":3,"SUM_PedInj":813,"SUM_BikeFat":2,"SUM_BikeInj":530,"SUM_MVOFat":5,"SUM_MVOInj":3283,"Year":2015,"Month":9},
{"SUM_Fatalities":25,"SUM_Injuries":5027,"SUM_PedFat":19,"SUM_PedInj":1111,"SUM_BikeFat":1,"SUM_BikeInj":431,"SUM_MVOFat":5,"SUM_MVOInj":3485,"Year":2015,"Month":10},
{"SUM_Fatalities":28,"SUM_Injuries":4492,"SUM_PedFat":21,"SUM_PedInj":1037,"SUM_BikeFat":0,"SUM_BikeInj":355,"SUM_MVOFat":7,"SUM_MVOInj":3100,"Year":2015,"Month":11},
{"SUM_Fatalities":23,"SUM_Injuries":4671,"SUM_PedFat":17,"SUM_PedInj":1153,"SUM_BikeFat":0,"SUM_BikeInj":297,"SUM_MVOFat":6,"SUM_MVOInj":3221,"Year":2015,"Month":12},
{"SUM_Fatalities":17,"SUM_Injuries":3799,"SUM_PedFat":11,"SUM_PedInj":924,"SUM_BikeFat":2,"SUM_BikeInj":171,"SUM_MVOFat":4,"SUM_MVOInj":2704,"Year":2016,"Month":1},
{"SUM_Fatalities":21,"SUM_Injuries":3794,"SUM_PedFat":12,"SUM_PedInj":1009,"SUM_BikeFat":1,"SUM_BikeInj":183,"SUM_MVOFat":8,"SUM_MVOInj":2602,"Year":2016,"Month":2},
{"SUM_Fatalities":13,"SUM_Injuries":4687,"SUM_PedFat":8,"SUM_PedInj":871,"SUM_BikeFat":0,"SUM_BikeInj":308,"SUM_MVOFat":5,"SUM_MVOInj":3508,"Year":2016,"Month":3},
{"SUM_Fatalities":14,"SUM_Injuries":5033,"SUM_PedFat":7,"SUM_PedInj":859,"SUM_BikeFat":3,"SUM_BikeInj":345,"SUM_MVOFat":4,"SUM_MVOInj":3829,"Year":2016,"Month":4},
{"SUM_Fatalities":21,"SUM_Injuries":5450,"SUM_PedFat":10,"SUM_PedInj":826,"SUM_BikeFat":2,"SUM_BikeInj":413,"SUM_MVOFat":9,"SUM_MVOInj":4211,"Year":2016,"Month":5},
{"SUM_Fatalities":27,"SUM_Injuries":5193,"SUM_PedFat":14,"SUM_PedInj":761,"SUM_BikeFat":3,"SUM_BikeInj":494,"SUM_MVOFat":10,"SUM_MVOInj":3938,"Year":2016,"Month":6},
{"SUM_Fatalities":17,"SUM_Injuries":5405,"SUM_PedFat":11,"SUM_PedInj":740,"SUM_BikeFat":3,"SUM_BikeInj":507,"SUM_MVOFat":3,"SUM_MVOInj":4158,"Year":2016,"Month":7},
{"SUM_Fatalities":27,"SUM_Injuries":5416,"SUM_PedFat":17,"SUM_PedInj":769,"SUM_BikeFat":2,"SUM_BikeInj":573,"SUM_MVOFat":8,"SUM_MVOInj":4074,"Year":2016,"Month":8},
{"SUM_Fatalities":16,"SUM_Injuries":5408,"SUM_PedFat":12,"SUM_PedInj":832,"SUM_BikeFat":1,"SUM_BikeInj":534,"SUM_MVOFat":3,"SUM_MVOInj":4042,"Year":2016,"Month":9},
{"SUM_Fatalities":19,"SUM_Injuries":5111,"SUM_PedFat":15,"SUM_PedInj":1021,"SUM_BikeFat":0,"SUM_BikeInj":453,"SUM_MVOFat":4,"SUM_MVOInj":3637,"Year":2016,"Month":10},
{"SUM_Fatalities":15,"SUM_Injuries":5053,"SUM_PedFat":12,"SUM_PedInj":1103,"SUM_BikeFat":0,"SUM_BikeInj":368,"SUM_MVOFat":3,"SUM_MVOInj":3582,"Year":2016,"Month":11},
{"SUM_Fatalities":22,"SUM_Injuries":4825,"SUM_PedFat":15,"SUM_PedInj":1020,"SUM_BikeFat":1,"SUM_BikeInj":232,"SUM_MVOFat":6,"SUM_MVOInj":3573,"Year":2016,"Month":12}]

;



var stats2 =
[{"SUM_Fatalities":260,"SUM_Injuries":55961,"SUM_PedFat":158,"SUM_PedInj":11928,"SUM_BikeFat":12,"SUM_BikeInj":3287,"SUM_MVOFat":90,"SUM_MVOInj":40746,"Year":2009},
{"SUM_Fatalities":271,"SUM_Injuries":58460,"SUM_PedFat":152,"SUM_PedInj":12046,"SUM_BikeFat":19,"SUM_BikeInj":3990,"SUM_MVOFat":100,"SUM_MVOInj":42424,"Year":2010},
{"SUM_Fatalities":249,"SUM_Injuries":55541,"SUM_PedFat":142,"SUM_PedInj":12021,"SUM_BikeFat":22,"SUM_BikeInj":3786,"SUM_MVOFat":85,"SUM_MVOInj":39734,"Year":2011},
{"SUM_Fatalities":278,"SUM_Injuries":54592,"SUM_PedFat":151,"SUM_PedInj":11644,"SUM_BikeFat":18,"SUM_BikeInj":3902,"SUM_MVOFat":109,"SUM_MVOInj":39046,"Year":2012},
{"SUM_Fatalities":299,"SUM_Injuries":55121,"SUM_PedFat":184,"SUM_PedInj":11986,"SUM_BikeFat":12,"SUM_BikeInj":4074,"SUM_MVOFat":103,"SUM_MVOInj":39061,"Year":2013},
{"SUM_Fatalities":258,"SUM_Injuries":51044,"SUM_PedFat":140,"SUM_PedInj":10988,"SUM_BikeFat":20,"SUM_BikeInj":3982,"SUM_MVOFat":98,"SUM_MVOInj":36074,"Year":2014},
{"SUM_Fatalities":234,"SUM_Injuries":53176,"SUM_PedFat":139,"SUM_PedInj":10462,"SUM_BikeFat":14,"SUM_BikeInj":4434,"SUM_MVOFat":81,"SUM_MVOInj":38280,"Year":2015},
{"SUM_Fatalities":229,"SUM_Injuries":59174,"SUM_PedFat":144,"SUM_PedInj":10735,"SUM_BikeFat":18,"SUM_BikeInj":4581,"SUM_MVOFat":67,"SUM_MVOInj":43858,"Year":2016}]
;

// new Jan 2017 //
var percent =
[{"yr":"Pre-VZ","ped_inj":11925,"bike_inj":3807.8,"mv_inj":40202.2,"all_inj":55935,"ped_k":157.4,"bike_k":16.6,"mv_k":97.4,"all_k":271.4,"pct_chng_ped_inj":"NULL","pct_chng_bike_inj":"NULL","pct_chng_mv_inj":"NULL","pct_chng_all_inj":"NULL","pct_chng_ped_k":"NULL","pct_chng_bike_k":"NULL","pct_chng_mv_k":"NULL","pct_chng_all_k":"NULL"},
{"yr":"2014","ped_inj":10988,"bike_inj":3982,"mv_inj":36074,"all_inj":51044,"ped_k":140,"bike_k":20,"mv_k":98,"all_k":258,"pct_chng_ped_inj":"-7.9","pct_chng_bike_inj":"4.6","pct_chng_mv_inj":"-10.3","pct_chng_all_inj":"-8.7","pct_chng_ped_k":"-11.1","pct_chng_bike_k":"20.5","pct_chng_mv_k":"0.6","pct_chng_all_k":"-4.9"},
{"yr":"2015","ped_inj":10462,"bike_inj":4434,"mv_inj":38280,"all_inj":53176,"ped_k":139,"bike_k":14,"mv_k":81,"all_k":234,"pct_chng_ped_inj":"-12.3","pct_chng_bike_inj":"16.4","pct_chng_mv_inj":"-4.8","pct_chng_all_inj":"-4.9","pct_chng_ped_k":"-11.7","pct_chng_bike_k":"-15.7","pct_chng_mv_k":"-16.8","pct_chng_all_k":"-13.8"},
{"yr":"2016","ped_inj":10735,"bike_inj":4581,"mv_inj":43858,"all_inj":59174,"ped_k":144,"bike_k":18,"mv_k":67,"all_k":229,"pct_chng_ped_inj":"-10","pct_chng_bike_inj":"20.3","pct_chng_mv_inj":"9.1","pct_chng_all_inj":"5.8","pct_chng_ped_k":"-8.5","pct_chng_bike_k":"8.4","pct_chng_mv_k":"-31.2","pct_chng_all_k":"-15.6"}]
;



////////////////////////////////////    mobile view crash layer selector ///////////////////////////////////////////////////////////////////////////////



function checkStats(){

    var monthVal = $("#monthSelect").val();
       var yearVal = $("#yearSelect").val();
       selectMonthVal = parseInt(monthVal);
       selectYearVal = parseInt(yearVal);

       if ($('#yearSelect').is(':visible')) {

              curInjuryValue = smallScreenCrashLayer();
				$("#updateMobileDate").css("display", "block");

              if (curInjuryValue > sliderMonth){
                     $("#stat1Mobile").text("Data not yet available");
                     $("#stat2Mobile").text("");

              }
              else{
                setStats(curInjuryValue);
              }
     }

       else{
              if (monthly){

                     curInjuryValue = $('#jqxslider').jqxSlider('getValue');
                     setStats(curInjuryValue);
              }
              else if (yearly){
                    var curInjuryValue;
                     curInjuryValue = $('#jqxslider2').jqxSlider('getValue');
                     setStats(curInjuryValue);

               }
			   $("#updateMobileDate").css("display", "none");
     }
	 	 // hack added for Chrome on Android - to update dropdown menu text
	 var yearText = $("#yearSelect option:selected").text();
	//console.log("text: " + yearText);
	$('#yearSelect option[value=0]').text('2009');
	var monthText = $("#monthSelect option:selected").text();
	//console.log("text: " + monthText);
	$('#monthSelect option[value=0]').text('Jan');

}

function setStats(curInjuryValue) {
  // new Jan 2017 //
  if  ( yearly && ((curInjuryValue == '5') || (curInjuryValue == '6') || (curInjuryValue == '7'))){

    $('#labelTable_vz').css('display', 'block');
    $('#logo-stack').css('display', 'block');
    $('#labelTable').css('display', 'none');
  } else {
    $('#labelTable_vz').css('display', 'none');
    $('#logo-stack').css('display', 'none');
    $('#labelTable').css('display', 'block');

  };

  var vzJSON, vz_year;
  if (yearly) vz_year = curInjuryValue
  switch (vz_year){
    case 5: // 2014
      vzJSON = 1; break;
    case 6: // 2015
      vzJSON = 2; break;
    case 7: // 2015
        vzJSON = 3; break;
    default:
    vzJSON = 0;
  }

       if (monthly){
            if (ped){
                     $("#stat1Mobile").text("Pedestrian Fatalities: " + stats[curInjuryValue].SUM_PedFat);
                     $("#stat2Mobile").text("Pedestrian Injuries: " + commaSeparateNumber(stats[curInjuryValue].SUM_PedInj));

              }
              else if (bike){
                     $("#stat1Mobile").text("Cyclist Fatalities: " + stats[curInjuryValue].SUM_BikeFat);
                     $("#stat2Mobile").text("Cyclist Injuries: " + commaSeparateNumber(stats[curInjuryValue].SUM_BikeInj));


              }
              else if (motor){
                     $("#stat1Mobile").text("Motorist Fatalities: " + stats[curInjuryValue].SUM_MVOFat);
                     $("#stat2Mobile").text("Motorist Injuries: " + commaSeparateNumber(stats[curInjuryValue].SUM_MVOInj));

              }
              else if (all){
                     $("#stat1Mobile").text("All Fatalities: " +  commaSeparateNumber(stats[curInjuryValue].SUM_Fatalities));
                     $("#stat2Mobile").text("All Injuries: " +  commaSeparateNumber(stats[curInjuryValue].SUM_Injuries));

              }


       }

       else if (yearly){
                      // new Jan 2017 //

                      if (ped){
                            $("#crash_type").text("Pedestrian");
                            $("#stat1Mobile").text("Fatalities: " + stats2[curInjuryValue].SUM_PedFat);
                            $("#stat2Mobile").text("Injuries: " + commaSeparateNumber(stats2[curInjuryValue].SUM_PedInj));
                            $("#crash_type_vz").text("Pedestrian");
                            $("#stat1_type_vz").text("Fatalities: ");
                            $("#stat1_num_vz").text(commaSeparateNumber(stats2[curInjuryValue].SUM_PedFat));
                            $("#stat1_percent_vz").text(percent[vzJSON].pct_chng_ped_k + "%");
                            $("#stat2_type_vz").text("Injuries: ");
                            $("#stat2_num_vz").text(commaSeparateNumber(stats2[curInjuryValue].SUM_PedInj));
                            $("#stat2_percent_vz").text(percent[vzJSON].pct_chng_ped_inj + "%") ;

                      }
                      else if (bike){
                            $("#crash_type").text("Bicycle");
                             $("#stat1Mobile").text("Fatalities: " + stats2[curInjuryValue].SUM_BikeFat);
                             $("#stat2Mobile").text("Injuries: " + commaSeparateNumber(stats2[curInjuryValue].SUM_BikeInj));
                             $("#crash_type_vz").text("Cyclist");
                             $("#stat1_type_vz").text("Fatalities: ");
                             $("#stat1_num_vz").text(commaSeparateNumber(stats2[curInjuryValue].SUM_BikeFat));
                             $("#stat1_percent_vz").text(percent[vzJSON].pct_chng_bike_k + "%");
                             $("#stat2_type_vz").text("Injuries: ");
                             $("#stat2_num_vz").text(commaSeparateNumber(stats2[curInjuryValue].SUM_BikeInj));
                             $("#stat2_percent_vz").text(percent[vzJSON].pct_chng_bike_inj + "%");

                      }
                      else if (motor){
                            $("#crash_type").text("Motorist");
                             $("#stat1Mobile").text("Fatalities: " + stats2[curInjuryValue].SUM_MVOFat);
                             $("#stat2Mobile").text("Injuries: " + commaSeparateNumber(stats2[curInjuryValue].SUM_MVOInj));
                             $("#crash_type_vz").text("Motorist");
                             $("#stat1_type_vz").text("Fatalities: ");
                             $("#stat1_num_vz").text(commaSeparateNumber(stats2[curInjuryValue].SUM_MVOFat));
                             $("#stat1_percent_vz").text(percent[vzJSON].pct_chng_mv_k + "%");
                             $("#stat2_type_vz").text("Injuries: ");
                             $("#stat2_num_vz").text(commaSeparateNumber(stats2[curInjuryValue].SUM_MVOInj));
                             $("#stat2_percent_vz").text(percent[vzJSON].pct_chng_mv_inj + "%");

                      }
                      else if (all){
                            $("#crash_type").text("All");
                             $("#stat1Mobile").text("Fatalities: " + stats2[curInjuryValue].SUM_Fatalities);
                             $("#stat2Mobile").text("Injuries: " + commaSeparateNumber(stats2[curInjuryValue].SUM_Injuries));
                             $("#crash_type_vz").text("All");
                             $("#stat1_type_vz").text("Fatalities: ");
                             $("#stat1_num_vz").text(commaSeparateNumber(stats2[curInjuryValue].SUM_Fatalities));
                             $("#stat1_percent_vz").text(percent[vzJSON].pct_chng_all_k + "%");
                             $("#stat2_type_vz").text("Injuries: ");
                             $("#stat2_num_vz").text(commaSeparateNumber(stats2[curInjuryValue].SUM_Injuries));
                             $("#stat2_percent_vz").text(percent[vzJSON].pct_chng_all_inj + "%");

                      }
            }
}

function commaSeparateNumber(val){
    val = val.toString().replace(/,/g, ''); //remove existing commas first
   var valSplit = val.split('.'); //then separate decimals

   while (/(\d+)(\d{3})/.test(valSplit[0].toString())){
        valSplit[0] = valSplit[0].toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }

    if(valSplit.length == 2){ //if there were decimals
        val = valSplit[0] + "." + valSplit[1]; //add decimals back
    }else{
        val = valSplit[0]; }

    return val;
}
