// JSON month and year need to be manually updated every month
// see instructions on G drive for how to create new JSONs

var stats = [
{"SUM_PedFat": "14", "Year": "2009", "SUM_BikeInj": "91", "SUM_Injuries": "3963", "SUM_MVOInj": "2879", "SUM_Fatalities": "15", "Month": "1", "SUM_MVOFat": "1", "SUM_BikeFat": "0", "SUM_PedInj": "993"},
{"SUM_PedFat": "15", "Year": "2009", "SUM_BikeInj": "130", "SUM_Injuries": "3623", "SUM_MVOInj": "2558", "SUM_Fatalities": "20", "Month": "2", "SUM_MVOFat": "5", "SUM_BikeFat": "0", "SUM_PedInj": "935"},
{"SUM_PedFat": "6", "Year": "2009", "SUM_BikeInj": "188", "SUM_Injuries": "4187", "SUM_MVOInj": "3007", "SUM_Fatalities": "8", "Month": "3", "SUM_MVOFat": "1", "SUM_BikeFat": "1", "SUM_PedInj": "992"},
{"SUM_PedFat": "13", "Year": "2009", "SUM_BikeInj": "237", "SUM_Injuries": "4659", "SUM_MVOInj": "3421", "SUM_Fatalities": "30", "Month": "4", "SUM_MVOFat": "16", "SUM_BikeFat": "1", "SUM_PedInj": "1001"},
{"SUM_PedFat": "19", "Year": "2009", "SUM_BikeInj": "298", "SUM_Injuries": "5183", "SUM_MVOInj": "3872", "SUM_Fatalities": "32", "Month": "5", "SUM_MVOFat": "10", "SUM_BikeFat": "3", "SUM_PedInj": "1013"},
{"SUM_PedFat": "10", "Year": "2009", "SUM_BikeInj": "368", "SUM_Injuries": "5138", "SUM_MVOInj": "3827", "SUM_Fatalities": "20", "Month": "6", "SUM_MVOFat": "8", "SUM_BikeFat": "2", "SUM_PedInj": "943"},
{"SUM_PedFat": "11", "Year": "2009", "SUM_BikeInj": "476", "SUM_Injuries": "5302", "SUM_MVOInj": "3927", "SUM_Fatalities": "18", "Month": "7", "SUM_MVOFat": "7", "SUM_BikeFat": "0", "SUM_PedInj": "899"},
{"SUM_PedFat": "14", "Year": "2009", "SUM_BikeInj": "475", "SUM_Injuries": "4946", "SUM_MVOInj": "3572", "SUM_Fatalities": "29", "Month": "8", "SUM_MVOFat": "12", "SUM_BikeFat": "3", "SUM_PedInj": "899"},
{"SUM_PedFat": "14", "Year": "2009", "SUM_BikeInj": "337", "SUM_Injuries": "4800", "SUM_MVOInj": "3521", "SUM_Fatalities": "20", "Month": "9", "SUM_MVOFat": "5", "SUM_BikeFat": "1", "SUM_PedInj": "942"},
{"SUM_PedFat": "13", "Year": "2009", "SUM_BikeInj": "311", "SUM_Injuries": "5127", "SUM_MVOInj": "3662", "SUM_Fatalities": "26", "Month": "10", "SUM_MVOFat": "13", "SUM_BikeFat": "0", "SUM_PedInj": "1154"},
{"SUM_PedFat": "18", "Year": "2009", "SUM_BikeInj": "247", "SUM_Injuries": "4597", "SUM_MVOInj": "3361", "SUM_Fatalities": "23", "Month": "11", "SUM_MVOFat": "5", "SUM_BikeFat": "0", "SUM_PedInj": "989"},
{"SUM_PedFat": "11", "Year": "2009", "SUM_BikeInj": "129", "SUM_Injuries": "4436", "SUM_MVOInj": "3139", "SUM_Fatalities": "19", "Month": "12", "SUM_MVOFat": "7", "SUM_BikeFat": "1", "SUM_PedInj": "1168"},
{"SUM_PedFat": "22", "Year": "2010", "SUM_BikeInj": "136", "SUM_Injuries": "4244", "SUM_MVOInj": "3040", "SUM_Fatalities": "29", "Month": "1", "SUM_MVOFat": "6", "SUM_BikeFat": "1", "SUM_PedInj": "1068"},
{"SUM_PedFat": "9", "Year": "2010", "SUM_BikeInj": "117", "SUM_Injuries": "3514", "SUM_MVOInj": "2471", "SUM_Fatalities": "12", "Month": "2", "SUM_MVOFat": "2", "SUM_BikeFat": "1", "SUM_PedInj": "926"},
{"SUM_PedFat": "10", "Year": "2010", "SUM_BikeInj": "223", "SUM_Injuries": "4405", "SUM_MVOInj": "3139", "SUM_Fatalities": "17", "Month": "3", "SUM_MVOFat": "5", "SUM_BikeFat": "2", "SUM_PedInj": "1043"},
{"SUM_PedFat": "14", "Year": "2010", "SUM_BikeInj": "315", "SUM_Injuries": "4884", "SUM_MVOInj": "3573", "SUM_Fatalities": "23", "Month": "4", "SUM_MVOFat": "7", "SUM_BikeFat": "2", "SUM_PedInj": "996"},
{"SUM_PedFat": "13", "Year": "2010", "SUM_BikeInj": "396", "SUM_Injuries": "5438", "SUM_MVOInj": "4040", "SUM_Fatalities": "30", "Month": "5", "SUM_MVOFat": "15", "SUM_BikeFat": "2", "SUM_PedInj": "1002"},
{"SUM_PedFat": "8", "Year": "2010", "SUM_BikeInj": "507", "SUM_Injuries": "5658", "SUM_MVOInj": "4176", "SUM_Fatalities": "24", "Month": "6", "SUM_MVOFat": "16", "SUM_BikeFat": "0", "SUM_PedInj": "975"},
{"SUM_PedFat": "9", "Year": "2010", "SUM_BikeInj": "489", "SUM_Injuries": "5316", "SUM_MVOInj": "3974", "SUM_Fatalities": "23", "Month": "7", "SUM_MVOFat": "10", "SUM_BikeFat": "4", "SUM_PedInj": "853"},
{"SUM_PedFat": "7", "Year": "2010", "SUM_BikeInj": "474", "SUM_Injuries": "5291", "SUM_MVOInj": "3937", "SUM_Fatalities": "25", "Month": "8", "SUM_MVOFat": "15", "SUM_BikeFat": "3", "SUM_PedInj": "880"},
{"SUM_PedFat": "19", "Year": "2010", "SUM_BikeInj": "474", "SUM_Injuries": "5304", "SUM_MVOInj": "3846", "SUM_Fatalities": "30", "Month": "9", "SUM_MVOFat": "9", "SUM_BikeFat": "2", "SUM_PedInj": "984"},
{"SUM_PedFat": "16", "Year": "2010", "SUM_BikeInj": "395", "SUM_Injuries": "5343", "SUM_MVOInj": "3755", "SUM_Fatalities": "23", "Month": "10", "SUM_MVOFat": "6", "SUM_BikeFat": "1", "SUM_PedInj": "1193"},
{"SUM_PedFat": "18", "Year": "2010", "SUM_BikeInj": "296", "SUM_Injuries": "4867", "SUM_MVOInj": "3455", "SUM_Fatalities": "25", "Month": "11", "SUM_MVOFat": "7", "SUM_BikeFat": "0", "SUM_PedInj": "1116"},
{"SUM_PedFat": "8", "Year": "2010", "SUM_BikeInj": "168", "SUM_Injuries": "4198", "SUM_MVOInj": "3019", "SUM_Fatalities": "12", "Month": "12", "SUM_MVOFat": "3", "SUM_BikeFat": "1", "SUM_PedInj": "1011"},
{"SUM_PedFat": "10", "Year": "2011", "SUM_BikeInj": "95", "SUM_Injuries": "3647", "SUM_MVOInj": "2611", "SUM_Fatalities": "18", "Month": "1", "SUM_MVOFat": "6", "SUM_BikeFat": "2", "SUM_PedInj": "941"},
{"SUM_PedFat": "14", "Year": "2011", "SUM_BikeInj": "124", "SUM_Injuries": "3275", "SUM_MVOInj": "2289", "SUM_Fatalities": "17", "Month": "2", "SUM_MVOFat": "3", "SUM_BikeFat": "0", "SUM_PedInj": "862"},
{"SUM_PedFat": "9", "Year": "2011", "SUM_BikeInj": "215", "SUM_Injuries": "4377", "SUM_MVOInj": "3112", "SUM_Fatalities": "16", "Month": "3", "SUM_MVOFat": "5", "SUM_BikeFat": "2", "SUM_PedInj": "1050"},
{"SUM_PedFat": "13", "Year": "2011", "SUM_BikeInj": "263", "SUM_Injuries": "4201", "SUM_MVOInj": "3064", "SUM_Fatalities": "23", "Month": "4", "SUM_MVOFat": "8", "SUM_BikeFat": "2", "SUM_PedInj": "874"},
{"SUM_PedFat": "7", "Year": "2011", "SUM_BikeInj": "389", "SUM_Injuries": "5159", "SUM_MVOInj": "3705", "SUM_Fatalities": "12", "Month": "5", "SUM_MVOFat": "4", "SUM_BikeFat": "1", "SUM_PedInj": "1065"},
{"SUM_PedFat": "10", "Year": "2011", "SUM_BikeInj": "524", "SUM_Injuries": "5067", "SUM_MVOInj": "3608", "SUM_Fatalities": "16", "Month": "6", "SUM_MVOFat": "3", "SUM_BikeFat": "3", "SUM_PedInj": "935"},
{"SUM_PedFat": "11", "Year": "2011", "SUM_BikeInj": "522", "SUM_Injuries": "5388", "SUM_MVOInj": "3986", "SUM_Fatalities": "25", "Month": "7", "SUM_MVOFat": "11", "SUM_BikeFat": "3", "SUM_PedInj": "880"},
{"SUM_PedFat": "5", "Year": "2011", "SUM_BikeInj": "448", "SUM_Injuries": "4842", "SUM_MVOInj": "3530", "SUM_Fatalities": "21", "Month": "8", "SUM_MVOFat": "11", "SUM_BikeFat": "5", "SUM_PedInj": "864"},
{"SUM_PedFat": "15", "Year": "2011", "SUM_BikeInj": "394", "SUM_Injuries": "4917", "SUM_MVOInj": "3583", "SUM_Fatalities": "26", "Month": "9", "SUM_MVOFat": "10", "SUM_BikeFat": "1", "SUM_PedInj": "940"},
{"SUM_PedFat": "16", "Year": "2011", "SUM_BikeInj": "350", "SUM_Injuries": "5012", "SUM_MVOInj": "3487", "SUM_Fatalities": "27", "Month": "10", "SUM_MVOFat": "10", "SUM_BikeFat": "1", "SUM_PedInj": "1175"},
{"SUM_PedFat": "13", "Year": "2011", "SUM_BikeInj": "256", "SUM_Injuries": "4760", "SUM_MVOInj": "3307", "SUM_Fatalities": "19", "Month": "11", "SUM_MVOFat": "5", "SUM_BikeFat": "1", "SUM_PedInj": "1197"},
{"SUM_PedFat": "19", "Year": "2011", "SUM_BikeInj": "206", "SUM_Injuries": "4898", "SUM_MVOInj": "3454", "SUM_Fatalities": "29", "Month": "12", "SUM_MVOFat": "9", "SUM_BikeFat": "1", "SUM_PedInj": "1238"},
{"SUM_PedFat": "16", "Year": "2012", "SUM_BikeInj": "185", "SUM_Injuries": "4226", "SUM_MVOInj": "2992", "SUM_Fatalities": "24", "Month": "1", "SUM_MVOFat": "7", "SUM_BikeFat": "1", "SUM_PedInj": "1049"},
{"SUM_PedFat": "11", "Year": "2012", "SUM_BikeInj": "182", "SUM_Injuries": "3864", "SUM_MVOInj": "2687", "SUM_Fatalities": "20", "Month": "2", "SUM_MVOFat": "8", "SUM_BikeFat": "1", "SUM_PedInj": "995"},
{"SUM_PedFat": "11", "Year": "2012", "SUM_BikeInj": "240", "SUM_Injuries": "4581", "SUM_MVOInj": "3449", "SUM_Fatalities": "22", "Month": "3", "SUM_MVOFat": "10", "SUM_BikeFat": "1", "SUM_PedInj": "892"},
{"SUM_PedFat": "12", "Year": "2012", "SUM_BikeInj": "324", "SUM_Injuries": "4741", "SUM_MVOInj": "3479", "SUM_Fatalities": "26", "Month": "4", "SUM_MVOFat": "10", "SUM_BikeFat": "4", "SUM_PedInj": "938"},
{"SUM_PedFat": "15", "Year": "2012", "SUM_BikeInj": "376", "SUM_Injuries": "4793", "SUM_MVOInj": "3512", "SUM_Fatalities": "26", "Month": "5", "SUM_MVOFat": "10", "SUM_BikeFat": "1", "SUM_PedInj": "905"},
{"SUM_PedFat": "11", "Year": "2012", "SUM_BikeInj": "385", "SUM_Injuries": "4942", "SUM_MVOInj": "3599", "SUM_Fatalities": "25", "Month": "6", "SUM_MVOFat": "11", "SUM_BikeFat": "3", "SUM_PedInj": "958"},
{"SUM_PedFat": "8", "Year": "2012", "SUM_BikeInj": "450", "SUM_Injuries": "4854", "SUM_MVOInj": "3550", "SUM_Fatalities": "24", "Month": "7", "SUM_MVOFat": "13", "SUM_BikeFat": "3", "SUM_PedInj": "854"},
{"SUM_PedFat": "13", "Year": "2012", "SUM_BikeInj": "507", "SUM_Injuries": "4750", "SUM_MVOInj": "3393", "SUM_Fatalities": "25", "Month": "8", "SUM_MVOFat": "11", "SUM_BikeFat": "1", "SUM_PedInj": "850"},
{"SUM_PedFat": "14", "Year": "2012", "SUM_BikeInj": "433", "SUM_Injuries": "4688", "SUM_MVOInj": "3362", "SUM_Fatalities": "26", "Month": "9", "SUM_MVOFat": "11", "SUM_BikeFat": "1", "SUM_PedInj": "893"},
{"SUM_PedFat": "14", "Year": "2012", "SUM_BikeInj": "332", "SUM_Injuries": "4572", "SUM_MVOInj": "3261", "SUM_Fatalities": "22", "Month": "10", "SUM_MVOFat": "6", "SUM_BikeFat": "2", "SUM_PedInj": "979"},
{"SUM_PedFat": "7", "Year": "2012", "SUM_BikeInj": "276", "SUM_Injuries": "3994", "SUM_MVOInj": "2681", "SUM_Fatalities": "11", "Month": "11", "SUM_MVOFat": "4", "SUM_BikeFat": "0", "SUM_PedInj": "1037"},
{"SUM_PedFat": "19", "Year": "2012", "SUM_BikeInj": "212", "SUM_Injuries": "4587", "SUM_MVOInj": "3081", "SUM_Fatalities": "27", "Month": "12", "SUM_MVOFat": "8", "SUM_BikeFat": "0", "SUM_PedInj": "1294"},
{"SUM_PedFat": "20", "Year": "2013", "SUM_BikeInj": "192", "SUM_Injuries": "4043", "SUM_MVOInj": "2738", "SUM_Fatalities": "28", "Month": "1", "SUM_MVOFat": "7", "SUM_BikeFat": "1", "SUM_PedInj": "1113"},
{"SUM_PedFat": "14", "Year": "2013", "SUM_BikeInj": "131", "SUM_Injuries": "3562", "SUM_MVOInj": "2447", "SUM_Fatalities": "19", "Month": "2", "SUM_MVOFat": "5", "SUM_BikeFat": "0", "SUM_PedInj": "984"},
{"SUM_PedFat": "14", "Year": "2013", "SUM_BikeInj": "195", "SUM_Injuries": "4186", "SUM_MVOInj": "3004", "SUM_Fatalities": "23", "Month": "3", "SUM_MVOFat": "8", "SUM_BikeFat": "1", "SUM_PedInj": "987"},
{"SUM_PedFat": "14", "Year": "2013", "SUM_BikeInj": "290", "SUM_Injuries": "4437", "SUM_MVOInj": "3246", "SUM_Fatalities": "17", "Month": "4", "SUM_MVOFat": "3", "SUM_BikeFat": "0", "SUM_PedInj": "901"},
{"SUM_PedFat": "6", "Year": "2013", "SUM_BikeInj": "400", "SUM_Injuries": "5025", "SUM_MVOInj": "3643", "SUM_Fatalities": "14", "Month": "5", "SUM_MVOFat": "6", "SUM_BikeFat": "2", "SUM_PedInj": "982"},
{"SUM_PedFat": "12", "Year": "2013", "SUM_BikeInj": "508", "SUM_Injuries": "5110", "SUM_MVOInj": "3630", "SUM_Fatalities": "24", "Month": "6", "SUM_MVOFat": "9", "SUM_BikeFat": "3", "SUM_PedInj": "972"},
{"SUM_PedFat": "14", "Year": "2013", "SUM_BikeInj": "470", "SUM_Injuries": "5088", "SUM_MVOInj": "3764", "SUM_Fatalities": "25", "Month": "7", "SUM_MVOFat": "11", "SUM_BikeFat": "0", "SUM_PedInj": "854"},
{"SUM_PedFat": "12", "Year": "2013", "SUM_BikeInj": "524", "SUM_Injuries": "4847", "SUM_MVOInj": "3468", "SUM_Fatalities": "31", "Month": "8", "SUM_MVOFat": "18", "SUM_BikeFat": "1", "SUM_PedInj": "855"},
{"SUM_PedFat": "15", "Year": "2013", "SUM_BikeInj": "479", "SUM_Injuries": "4992", "SUM_MVOInj": "3514", "SUM_Fatalities": "28", "Month": "9", "SUM_MVOFat": "13", "SUM_BikeFat": "0", "SUM_PedInj": "999"},
{"SUM_PedFat": "16", "Year": "2013", "SUM_BikeInj": "429", "SUM_Injuries": "4842", "SUM_MVOInj": "3347", "SUM_Fatalities": "24", "Month": "10", "SUM_MVOFat": "6", "SUM_BikeFat": "2", "SUM_PedInj": "1066"},
{"SUM_PedFat": "26", "Year": "2013", "SUM_BikeInj": "281", "SUM_Injuries": "4704", "SUM_MVOInj": "3317", "SUM_Fatalities": "36", "Month": "11", "SUM_MVOFat": "8", "SUM_BikeFat": "2", "SUM_PedInj": "1106"},
{"SUM_PedFat": "21", "Year": "2013", "SUM_BikeInj": "175", "SUM_Injuries": "4285", "SUM_MVOInj": "2943", "SUM_Fatalities": "30", "Month": "12", "SUM_MVOFat": "9", "SUM_BikeFat": "0", "SUM_PedInj": "1167"},
{"SUM_PedFat": "13", "Year": "2014", "SUM_BikeInj": "120", "SUM_Injuries": "3921", "SUM_MVOInj": "2720", "SUM_Fatalities": "23", "Month": "1", "SUM_MVOFat": "9", "SUM_BikeFat": "1", "SUM_PedInj": "1081"},
{"SUM_PedFat": "7", "Year": "2014", "SUM_BikeInj": "94", "SUM_Injuries": "3106", "SUM_MVOInj": "2191", "SUM_Fatalities": "11", "Month": "2", "SUM_MVOFat": "3", "SUM_BikeFat": "1", "SUM_PedInj": "821"},
{"SUM_PedFat": "12", "Year": "2014", "SUM_BikeInj": "190", "SUM_Injuries": "3842", "SUM_MVOInj": "2696", "SUM_Fatalities": "17", "Month": "3", "SUM_MVOFat": "5", "SUM_BikeFat": "0", "SUM_PedInj": "956"},
{"SUM_PedFat": "8", "Year": "2014", "SUM_BikeInj": "306", "SUM_Injuries": "4028", "SUM_MVOInj": "2866", "SUM_Fatalities": "21", "Month": "4", "SUM_MVOFat": "11", "SUM_BikeFat": "2", "SUM_PedInj": "856"},
{"SUM_PedFat": "9", "Year": "2014", "SUM_BikeInj": "385", "SUM_Injuries": "4636", "SUM_MVOInj": "3368", "SUM_Fatalities": "23", "Month": "5", "SUM_MVOFat": "12", "SUM_BikeFat": "2", "SUM_PedInj": "883"},
{"SUM_PedFat": "7", "Year": "2014", "SUM_BikeInj": "472", "SUM_Injuries": "4967", "SUM_MVOInj": "3553", "SUM_Fatalities": "19", "Month": "6", "SUM_MVOFat": "9", "SUM_BikeFat": "3", "SUM_PedInj": "942"},
{"SUM_PedFat": "15", "Year": "2014", "SUM_BikeInj": "533", "SUM_Injuries": "4586", "SUM_MVOInj": "3284", "SUM_Fatalities": "29", "Month": "7", "SUM_MVOFat": "11", "SUM_BikeFat": "3", "SUM_PedInj": "769"},
{"SUM_PedFat": "10", "Year": "2014", "SUM_BikeInj": "499", "SUM_Injuries": "4452", "SUM_MVOInj": "3230", "SUM_Fatalities": "22", "Month": "8", "SUM_MVOFat": "8", "SUM_BikeFat": "4", "SUM_PedInj": "723"},
{"SUM_PedFat": "17", "Year": "2014", "SUM_BikeInj": "485", "SUM_Injuries": "4440", "SUM_MVOInj": "3205", "SUM_Fatalities": "32", "Month": "9", "SUM_MVOFat": "14", "SUM_BikeFat": "1", "SUM_PedInj": "750"},
{"SUM_PedFat": "17", "Year": "2014", "SUM_BikeInj": "430", "SUM_Injuries": "4703", "SUM_MVOInj": "3298", "SUM_Fatalities": "22", "Month": "10", "SUM_MVOFat": "4", "SUM_BikeFat": "1", "SUM_PedInj": "975"},
{"SUM_PedFat": "12", "Year": "2014", "SUM_BikeInj": "279", "SUM_Injuries": "4227", "SUM_MVOInj": "2931", "SUM_Fatalities": "23", "Month": "11", "SUM_MVOFat": "9", "SUM_BikeFat": "2", "SUM_PedInj": "1017"},
{"SUM_PedFat": "13", "Year": "2014", "SUM_BikeInj": "189", "SUM_Injuries": "4137", "SUM_MVOInj": "2733", "SUM_Fatalities": "16", "Month": "12", "SUM_MVOFat": "3", "SUM_BikeFat": "0", "SUM_PedInj": "1215"},
{"SUM_PedFat": "9", "Year": "2015", "SUM_BikeInj": "119", "SUM_Injuries": "3585", "SUM_MVOInj": "2542", "SUM_Fatalities": "16", "Month": "1", "SUM_MVOFat": "6", "SUM_BikeFat": "1", "SUM_PedInj": "924"},
{"SUM_PedFat": "11", "Year": "2015", "SUM_BikeInj": "83", "SUM_Injuries": "3110", "SUM_MVOInj": "2257", "SUM_Fatalities": "14", "Month": "2", "SUM_MVOFat": "3", "SUM_BikeFat": "0", "SUM_PedInj": "770"},
{"SUM_PedFat": "6", "Year": "2015", "SUM_BikeInj": "167", "SUM_Injuries": "3819", "SUM_MVOInj": "2828", "SUM_Fatalities": "11", "Month": "3", "SUM_MVOFat": "5", "SUM_BikeFat": "0", "SUM_PedInj": "824"},
{"SUM_PedFat": "5", "Year": "2015", "SUM_BikeInj": "317", "SUM_Injuries": "4027", "SUM_MVOInj": "2991", "SUM_Fatalities": "17", "Month": "4", "SUM_MVOFat": "10", "SUM_BikeFat": "2", "SUM_PedInj": "719"},
{"SUM_PedFat": "19", "Year": "2015", "SUM_BikeInj": "488", "SUM_Injuries": "4983", "SUM_MVOInj": "3660", "SUM_Fatalities": "29", "Month": "5", "SUM_MVOFat": "9", "SUM_BikeFat": "1", "SUM_PedInj": "835"},
{"SUM_PedFat": "13", "Year": "2015", "SUM_BikeInj": "474", "SUM_Injuries": "4983", "SUM_MVOInj": "3711", "SUM_Fatalities": "20", "Month": "6", "SUM_MVOFat": "6", "SUM_BikeFat": "1", "SUM_PedInj": "798"},
{"SUM_PedFat": "5", "Year": "2015", "SUM_BikeInj": "590", "SUM_Injuries": "4931", "SUM_MVOInj": "3614", "SUM_Fatalities": "19", "Month": "7", "SUM_MVOFat": "10", "SUM_BikeFat": "4", "SUM_PedInj": "727"},
{"SUM_PedFat": "11", "Year": "2015", "SUM_BikeInj": "583", "SUM_Injuries": "4922", "SUM_MVOInj": "3588", "SUM_Fatalities": "22", "Month": "8", "SUM_MVOFat": "9", "SUM_BikeFat": "2", "SUM_PedInj": "751"},
{"SUM_PedFat": "3", "Year": "2015", "SUM_BikeInj": "530", "SUM_Injuries": "4626", "SUM_MVOInj": "3283", "SUM_Fatalities": "10", "Month": "9", "SUM_MVOFat": "5", "SUM_BikeFat": "2", "SUM_PedInj": "813"},
{"SUM_PedFat": "19", "Year": "2015", "SUM_BikeInj": "431", "SUM_Injuries": "5027", "SUM_MVOInj": "3485", "SUM_Fatalities": "25", "Month": "10", "SUM_MVOFat": "5", "SUM_BikeFat": "1", "SUM_PedInj": "1111"},
{"SUM_PedFat": "21", "Year": "2015", "SUM_BikeInj": "355", "SUM_Injuries": "4492", "SUM_MVOInj": "3100", "SUM_Fatalities": "28", "Month": "11", "SUM_MVOFat": "7", "SUM_BikeFat": "0", "SUM_PedInj": "1037"},
{"SUM_PedFat": "17", "Year": "2015", "SUM_BikeInj": "297", "SUM_Injuries": "4671", "SUM_MVOInj": "3221", "SUM_Fatalities": "23", "Month": "12", "SUM_MVOFat": "6", "SUM_BikeFat": "0", "SUM_PedInj": "1153"},
{"SUM_PedFat": "11", "Year": "2016", "SUM_BikeInj": "170", "SUM_Injuries": "3809", "SUM_MVOInj": "2711", "SUM_Fatalities": "17", "Month": "1", "SUM_MVOFat": "4", "SUM_BikeFat": "2", "SUM_PedInj": "928"},
{"SUM_PedFat": "12", "Year": "2016", "SUM_BikeInj": "183", "SUM_Injuries": "3803", "SUM_MVOInj": "2606", "SUM_Fatalities": "21", "Month": "2", "SUM_MVOFat": "8", "SUM_BikeFat": "1", "SUM_PedInj": "1014"},
{"SUM_PedFat": "8", "Year": "2016", "SUM_BikeInj": "308", "SUM_Injuries": "4715", "SUM_MVOInj": "3534", "SUM_Fatalities": "13", "Month": "3", "SUM_MVOFat": "5", "SUM_BikeFat": "0", "SUM_PedInj": "873"},
{"SUM_PedFat": "7", "Year": "2016", "SUM_BikeInj": "346", "SUM_Injuries": "5048", "SUM_MVOInj": "3840", "SUM_Fatalities": "14", "Month": "4", "SUM_MVOFat": "4", "SUM_BikeFat": "3", "SUM_PedInj": "862"},
{"SUM_PedFat": "10", "Year": "2016", "SUM_BikeInj": "414", "SUM_Injuries": "5460", "SUM_MVOInj": "4219", "SUM_Fatalities": "21", "Month": "5", "SUM_MVOFat": "9", "SUM_BikeFat": "2", "SUM_PedInj": "827"},
{"SUM_PedFat": "15", "Year": "2016", "SUM_BikeInj": "494", "SUM_Injuries": "5212", "SUM_MVOInj": "3955", "SUM_Fatalities": "28", "Month": "6", "SUM_MVOFat": "10", "SUM_BikeFat": "3", "SUM_PedInj": "763"},
{"SUM_PedFat": "12", "Year": "2016", "SUM_BikeInj": "508", "SUM_Injuries": "5418", "SUM_MVOInj": "4169", "SUM_Fatalities": "18", "Month": "7", "SUM_MVOFat": "3", "SUM_BikeFat": "3", "SUM_PedInj": "741"},
{"SUM_PedFat": "18", "Year": "2016", "SUM_BikeInj": "575", "SUM_Injuries": "5427", "SUM_MVOInj": "4081", "SUM_Fatalities": "28", "Month": "8", "SUM_MVOFat": "8", "SUM_BikeFat": "2", "SUM_PedInj": "771"},
{"SUM_PedFat": "12", "Year": "2016", "SUM_BikeInj": "536", "SUM_Injuries": "5432", "SUM_MVOInj": "4060", "SUM_Fatalities": "16", "Month": "9", "SUM_MVOFat": "3", "SUM_BikeFat": "1", "SUM_PedInj": "836"},
{"SUM_PedFat": "15", "Year": "2016", "SUM_BikeInj": "455", "SUM_Injuries": "5136", "SUM_MVOInj": "3659", "SUM_Fatalities": "19", "Month": "10", "SUM_MVOFat": "4", "SUM_BikeFat": "0", "SUM_PedInj": "1022"},
{"SUM_PedFat": "12", "Year": "2016", "SUM_BikeInj": "368", "SUM_Injuries": "5071", "SUM_MVOInj": "3597", "SUM_Fatalities": "15", "Month": "11", "SUM_MVOFat": "3", "SUM_BikeFat": "0", "SUM_PedInj": "1106"},
{"SUM_PedFat": "15", "Year": "2016", "SUM_BikeInj": "235", "SUM_Injuries": "4862", "SUM_MVOInj": "3595", "SUM_Fatalities": "22", "Month": "12", "SUM_MVOFat": "6", "SUM_BikeFat": "1", "SUM_PedInj": "1032"},
{"SUM_PedFat": "13", "Year": "2017", "SUM_BikeInj": "178", "SUM_Injuries": "4358", "SUM_MVOInj": "3121", "SUM_Fatalities": "18", "Month": "1", "SUM_MVOFat": "4", "SUM_BikeFat": "1", "SUM_PedInj": "1059"},
{"SUM_PedFat": "5", "Year": "2017", "SUM_BikeInj": "198", "SUM_Injuries": "3638", "SUM_MVOInj": "2673", "SUM_Fatalities": "11", "Month": "2", "SUM_MVOFat": "6", "SUM_BikeFat": "0", "SUM_PedInj": "767"},
{"SUM_PedFat": "11", "Year": "2017", "SUM_BikeInj": "205", "SUM_Injuries": "4097", "SUM_MVOInj": "3008", "SUM_Fatalities": "16", "Month": "3", "SUM_MVOFat": "4", "SUM_BikeFat": "1", "SUM_PedInj": "884"},
{"SUM_PedFat": "5", "Year": "2017", "SUM_BikeInj": "322", "SUM_Injuries": "4424", "SUM_MVOInj": "3401", "SUM_Fatalities": "18", "Month": "4", "SUM_MVOFat": "11", "SUM_BikeFat": "2", "SUM_PedInj": "701"}


]
;

var stats2 =

[
{"SUM_PedFat": "158", "Year": "2009", "SUM_BikeInj": "3287", "SUM_Injuries": "55961", "SUM_MVOInj": "40746", "SUM_Fatalities": "260", "SUM_MVOFat": "90", "SUM_BikeFat": "12", "SUM_PedInj": "11928"},
{"SUM_PedFat": "153", "Year": "2010", "SUM_BikeInj": "3990", "SUM_Injuries": "58462", "SUM_MVOInj": "42425", "SUM_Fatalities": "273", "SUM_MVOFat": "101", "SUM_BikeFat": "19", "SUM_PedInj": "12047"},
{"SUM_PedFat": "142", "Year": "2011", "SUM_BikeInj": "3786", "SUM_Injuries": "55543", "SUM_MVOInj": "39736", "SUM_Fatalities": "249", "SUM_MVOFat": "85", "SUM_BikeFat": "22", "SUM_PedInj": "12021"},
{"SUM_PedFat": "151", "Year": "2012", "SUM_BikeInj": "3902", "SUM_Injuries": "54592", "SUM_MVOInj": "39046", "SUM_Fatalities": "278", "SUM_MVOFat": "109", "SUM_BikeFat": "18", "SUM_PedInj": "11644"},
{"SUM_PedFat": "184", "Year": "2013", "SUM_BikeInj": "4074", "SUM_Injuries": "55121", "SUM_MVOInj": "39061", "SUM_Fatalities": "299", "SUM_MVOFat": "103", "SUM_BikeFat": "12", "SUM_PedInj": "11986"},
{"SUM_PedFat": "140", "Year": "2014", "SUM_BikeInj": "3982", "SUM_Injuries": "51045", "SUM_MVOInj": "36075", "SUM_Fatalities": "258", "SUM_MVOFat": "98", "SUM_BikeFat": "20", "SUM_PedInj": "10988"},
{"SUM_PedFat": "139", "Year": "2015", "SUM_BikeInj": "4434", "SUM_Injuries": "53176", "SUM_MVOInj": "38280", "SUM_Fatalities": "234", "SUM_MVOFat": "81", "SUM_BikeFat": "14", "SUM_PedInj": "10462"},
{"SUM_PedFat": "147", "Year": "2016", "SUM_BikeInj": "4592", "SUM_Injuries": "59393", "SUM_MVOInj": "44026", "SUM_Fatalities": "232", "SUM_MVOFat": "67", "SUM_BikeFat": "18", "SUM_PedInj": "10775"},
{"SUM_PedFat": "34", "Year": "2017", "SUM_BikeInj": "903", "SUM_Injuries": "16517", "SUM_MVOInj": "12203", "SUM_Fatalities": "63", "SUM_MVOFat": "25", "SUM_BikeFat": "4", "SUM_PedInj": "3411"},

]
;

// new Jan 2017 //
var percent =
[{"yr":"Pre-VZ","ped_inj":11925,"bike_inj":3807.8,"mv_inj":40202,"all_inj":55934.8,"ped_k":157.6,"bike_k":16.6,"mv_k":97.6,"all_k":271.8,"pct_chng_ped_inj":"NULL","pct_chng_bike_inj":"NULL","pct_chng_mv_inj":"NULL","pct_chng_all_inj":"NULL","pct_chng_ped_k":"NULL","pct_chng_bike_k":"NULL","pct_chng_mv_k":"NULL","pct_chng_all_k":"NULL"},
{"yr":"2014","ped_inj":10988,"bike_inj":3982,"mv_inj":36074,"all_inj":51044,"ped_k":140,"bike_k":20,"mv_k":98,"all_k":258,"pct_chng_ped_inj":"-7.9","pct_chng_bike_inj":"4.6","pct_chng_mv_inj":"-10.3","pct_chng_all_inj":"-8.7","pct_chng_ped_k":"-11.2","pct_chng_bike_k":"20.5","pct_chng_mv_k":"0.4","pct_chng_all_k":"-5.1"},
{"yr":"2015","ped_inj":10462,"bike_inj":4434,"mv_inj":38280,"all_inj":53176,"ped_k":139,"bike_k":14,"mv_k":81,"all_k":234,"pct_chng_ped_inj":"-12.3","pct_chng_bike_inj":"16.4","pct_chng_mv_inj":"-4.8","pct_chng_all_inj":"-4.9","pct_chng_ped_k":"-11.8","pct_chng_bike_k":"-15.7","pct_chng_mv_k":"-17","pct_chng_all_k":"-13.9"},
{"yr":"2016","ped_inj":10769,"bike_inj":4591,"mv_inj":43989,"all_inj":59349,"ped_k":145,"bike_k":18,"mv_k":67,"all_k":230,"pct_chng_ped_inj":"-9.7","pct_chng_bike_inj":"20.6","pct_chng_mv_inj":"9.4","pct_chng_all_inj":"6.1","pct_chng_ped_k":"-8","pct_chng_bike_k":"8.4","pct_chng_mv_k":"-31.4","pct_chng_all_k":"-15.4"}]
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
