

  function cleanMapping() {
    var mapping = {
      "tts_CherryBosoms-TotalRecalls-144_{RC:6.25,RS:8.33,RT:0.75}":"tts_CherryBosoms-TotalRecalls-144_",
      "tts_WaterMelons-Oh Buoys-143_{RC:7.64,RS:8.33,RT:0.92}": "tts_WaterMelons-Oh Buoys-143_",
      "tts_StarBust-Shaggies-142_{RC:8.33,RS:6.94,RT:1.2}": "tts_StarBust-Shaggies-142_",
      "tts_PurpleHush-Hoots-141_{RC:6.94,RS:8.33,RT:0.83}": "tts_PurpleHush-Hoots-141_",
      "tts_StarBust-Artemis-140_{RC:8.33,RS:12.5,RT:0.67}": "tts_StarBust-Artemis-140_",
      "tts_StarBust-HolyMels-139_{RC:8.33,RS:8.33,RT:1}": "tts_StarBust-HolyMels-139_",
      "tts_ChocoLattes-Vintties-138_{RC:6.94,RS:7.64,RT:0.91}": "tts_ChocoLattes-Vintties-138_",
      "tts_CocoNaugthy-Perkies-137_{RC:8.33,RS:10.42,RT:0.8}": "tts_CocoNaugthy-Perkies-137_",
      "tts_PurpleHush-Spades-136_{RC:6.94,RS:8.33,RT:0.83}": "tts_PurpleHush-Spades-136_",
      "tts_BooBerries-Vintties-135_{RC:7.64,RS:7.64,RT:1}": "tts_BooBerries-Vintties-135_",
      "tts_PeCans-Perkies-134_{RC:6.94,RS:10.42,RT:0.67}": "tts_PeCans-Perkies-134_",
      "tts_WaterMelons-Spades-133_{RC:7.64,RS:8.33,RT:0.92}": "tts_WaterMelons-Spades-133_",
      "tts_StarBust-Hypnotits-132_{RC:8.33,RS:7.64,RT:1.09}": "tts_StarBust-Hypnotits-132_",
      "tts_WaterMelons-TotalRecalls-131_{RC:7.64,RS:8.33,RT:0.92}": "tts_WaterMelons-TotalRecalls-131_",
      "tts_CupCakes-TotalRecalls-130_{RC:8.33,RS:8.33,RT:1}": "tts_CupCakes-TotalRecalls-130_",
      "tts_PurpleHush-TotalRecalls-129_{RC:6.94,RS:8.33,RT:0.83}": "tts_PurpleHush-TotalRecalls-129_",
      "tts_StarBust-Spades-128_{RC:8.33,RS:8.33,RT:1}": "tts_StarBust-Spades-128_",
      "tts_CupCakes-Trooper-127_{RC:8.33,RS:6.94,RT:1.2}": "tts_CupCakes-Trooper-127_",
      "tts_CocoNaugthy-Hypnotits-126_{RC:8.33,RS:7.64,RT:1.09}": "tts_CocoNaugthy-Hypnotits-126_",
      "tts_BooBerries-Spades-125_{RC:7.64,RS:8.33,RT:0.92}": "tts_BooBerries-Spades-125_",
      "tts_BooBerries-TotalRecalls-124_{RC:7.64,RS:8.33,RT:0.92}": "tts_BooBerries-TotalRecalls-124_",
      "tts_WaterMelons-Hoots-123_{RC:7.64,RS:8.33,RT:0.92}": "tts_WaterMelons-Hoots-123_",
      "tts_CupCakes-Perkies-122_{RC:8.33,RS:10.42,RT:0.8}": "tts_CupCakes-Perkies-122_",
      "tts_CupCakes-Shaggies-121_{RC:8.33,RS:6.94,RT:1.2}": "tts_CupCakes-Shaggies-121_",
      "tts_BooBerries-HolyMels-120_{RC:7.64,RS:8.33,RT:0.92}": "tts_BooBerries-HolyMels-120_",
      "tts_PeCans-Spades-119_{RC:6.94,RS:8.33,RT:0.83}": "tts_PeCans-Spades-119_",
      "tts_PaPairmint-Perkies-118_{RC:6.94,RS:10.42,RT:0.67}": "tts_PaPairmint-Perkies-118_",
      "tts_PeCans-Hoots-117_{RC:6.94,RS:8.33,RT:0.83}": "tts_PeCans-Hoots-117_",
      "tts_StarBust-Vintties-116_{RC:8.33,RS:7.64,RT:1.09}": "tts_StarBust-Vintties-116_",
      "tts_PurpleHush-Vintties-115_{RC:6.94,RS:7.64,RT:0.91}": "tts_PurpleHush-Vintties-115_",
      "tts_PaPairmint-Buffies-114_{RC:6.94,RS:6.25,RT:1.11}": "tts_PaPairmint-Buffies-114_",
      "tts_PurpleHush-Shaggies-113_{RC:6.94,RS:6.94,RT:1}": "tts_PurpleHush-Shaggies-113_",
      "tts_CupCakes-Vintties-112_{RC:8.33,RS:7.64,RT:1.09}": "tts_CupCakes-Vintties-112_",
      "tts_ButterUdders-HolyMels-111_{RC:8.33,RS:8.33,RT:1}": "tts_ButterUdders-HolyMels-111_",
      "tts_PaPairmint-Spades-110_{RC:6.94,RS:8.33,RT:0.83}": "tts_PaPairmint-Spades-110_",
      "tts_ButterUdders-Vintties-109_{RC:8.33,RS:7.64,RT:1.09}": "tts_ButterUdders-Vintties-109_",
      "tts_PurpleHush-HolyMels-108_{RC:6.94,RS:8.33,RT:0.83}": "tts_PurpleHush-HolyMels-108_",
      "tts_StarBust-TotalRecalls-107_{RC:8.33,RS:8.33,RT:1}": "tts_StarBust-TotalRecalls-107_",
      "tts_PaPairmint-Hoots-106_{RC:6.94,RS:8.33,RT:0.83}": "tts_PaPairmint-Hoots-106_",
      "tts_PurpleHush-Oh Buoys-105_{RC:6.94,RS:8.33,RT:0.83}": "tts_PurpleHush-Oh Buoys-105_",
      "tts_ChocoLattes-Hoots-104_{RC:6.94,RS:8.33,RT:0.83}": "tts_ChocoLattes-Hoots-104_",
      "tts_CupCakes-Hypnotits-103_{RC:8.33,RS:7.64,RT:1.09}": "tts_CupCakes-Hypnotits-103_",
      "tts_BooBerries-Shaggies-102_{RC:7.64,RS:6.94,RT:1.1}": "tts_BooBerries-Shaggies-102_",
      "tts_TataColadas-Hoots-101_{RC:7.64,RS:8.33,RT:0.92}": "tts_TataColadas-Hoots-101_",
      "tts_CupCakes-Hoots-100_{RC:8.33,RS:8.33,RT:1}": "tts_CupCakes-Hoots-100_",
      "tts_ChocoLattes-HolyMels-99_{RC:6.94,RS:8.33,RT:0.83}": "tts_ChocoLattes-HolyMels-99_",
      "tts_CupCakes-Buffies-98_{RC:8.33,RS:6.25,RT:1.33}": "tts_CupCakes-Buffies-98_",
      "tts_BooBerries-Artemis-97_{RC:7.64,RS:12.5,RT:0.61}": "tts_BooBerries-Artemis-97_",
      "tts_TataColadas-Artemis-96_{RC:7.64,RS:12.5,RT:0.61}": "tts_TataColadas-Artemis-96_",
      "tts_PaPairmint-Vintties-95_{RC:6.94,RS:7.64,RT:0.91}": "tts_PaPairmint-Vintties-95_",
      "tts_ChocoLattes-TotalRecalls-94_{RC:6.94,RS:8.33,RT:0.83}": "tts_ChocoLattes-TotalRecalls-94_",
      "tts_CherryBosoms-HolyMels-93_{RC:6.25,RS:8.33,RT:0.75}": "tts_CherryBosoms-HolyMels-93_",
      "tts_CupCakes-HolyMels-92_{RC:8.33,RS:8.33,RT:1}": "tts_CupCakes-HolyMels-92_",
      "tts_CocoNaugthy-Hoots-91_{RC:8.33,RS:8.33,RT:1}": "tts_CocoNaugthy-Hoots-91_",
      "tts_BooBerries-Perkies-90_{RC:7.64,RS:10.42,RT:0.73}": "tts_BooBerries-Perkies-90_",
      "tts_TataColadas-Perkies-89_{RC:7.64,RS:10.42,RT:0.73}": "tts_TataColadas-Perkies-89_",
      "tts_PurpleHush-Artemis-88_{RC:6.94,RS:12.5,RT:0.56}": "tts_PurpleHush-Artemis-88_",
      "tts_StarBust-Buffies-87_{RC:8.33,RS:6.25,RT:1.33}": "tts_StarBust-Buffies-87_",
      "tts_PaPairmint-Artemis-86_{RC:6.94,RS:12.5,RT:0.56}": "tts_PaPairmint-Artemis-86_",
      "tts_BooBerries-Hypnotits-85_{RC:7.64,RS:7.64,RT:1}": "tts_BooBerries-Hypnotits-85_",
      "tts_PurpleHush-Hypnotits-84_{RC:6.94,RS:7.64,RT:0.91}": "tts_PurpleHush-Hypnotits-84_",
      "tts_StarBust-Trooper-83_{RC:8.33,RS:6.94,RT:1.2}": "tts_StarBust-Trooper-83_",
      "tts_TataColadas-Shaggies-82_{RC:7.64,RS:6.94,RT:1.1}": "tts_TataColadas-Shaggies-82_",
      "tts_TataColadas-TotalRecalls-81_{RC:7.64,RS:8.33,RT:0.92}": "tts_TataColadas-TotalRecalls-81_",
      "tts_TataColadas-HolyMels-80_{RC:7.64,RS:8.33,RT:0.92}": "tts_TataColadas-HolyMels-80_",
      "tts_WaterMelons-Trooper-79_{RC:7.64,RS:6.94,RT:1.1}": "tts_WaterMelons-Trooper-79_",
      "tts_StarBust-Perkies-78_{RC:8.33,RS:10.42,RT:0.8}": "tts_StarBust-Perkies-78_",
      "tts_TataColadas-Hypnotits-77_{RC:7.64,RS:7.64,RT:1}": "tts_TataColadas-Hypnotits-77_",
      "tts_TataColadas-Spades-76_{RC:7.64,RS:8.33,RT:0.92}": "tts_TataColadas-Spades-76_",
      "tts_ChocoLattes-Hypnotits-75_{RC:6.94,RS:7.64,RT:0.91}": "tts_ChocoLattes-Hypnotits-75_",
      "tts_ButterUdders-Shaggies-74_{RC:8.33,RS:6.94,RT:1.2}": "tts_ButterUdders-Shaggies-74_",
      "tts_ButterUdders-Spades-73_{RC:8.33,RS:8.33,RT:1}": "tts_ButterUdders-Spades-73_",
      "tts_BooBerries-Trooper-72_{RC:7.64,RS:6.94,RT:1.1}": "tts_BooBerries-Trooper-72_",
      "tts_ButterUdders-Hoots-71_{RC:8.33,RS:8.33,RT:1}": "tts_ButterUdders-Hoots-71_",
      "tts_WaterMelons-Vintties-70_{RC:7.64,RS:7.64,RT:1}": "tts_WaterMelons-Vintties-70_",
      "tts_TataColadas-Vintties-69_{RC:7.64,RS:7.64,RT:1}": "tts_TataColadas-Vintties-69_",
      "tts_WaterMelons-HolyMels-68_{RC:7.64,RS:8.33,RT:0.92}": "tts_WaterMelons-HolyMels-68_",
      "tts_StarBust-Oh Buoys-67_{RC:8.33,RS:8.33,RT:1}": "tts_StarBust-Oh Buoys-67_",
      "tts_PurpleHush-Perkies-66_{RC:6.94,RS:10.42,RT:0.67}": "tts_PurpleHush-Perkies-66_",
      "tts_CherryBosoms-Shaggies-65_{RC:6.25,RS:6.94,RT:0.9}": "tts_CherryBosoms-Shaggies-65_",
      "tts_RackBerries-Shaggies-64_{RC:2.78,RS:6.94,RT:0.4}": "tts_RackBerries-Shaggies-64_",
      "tts_LimeJellies-Artemis-63_{RC:1.39,RS:12.5,RT:0.11}": "tts_LimeJellies-Artemis-63_",
      "tts_RackBerries-Perkies-62_{RC:2.78,RS:10.42,RT:0.27}": "tts_RackBerries-Perkies-62_",
      "tts_RackBerries-Artemis-61_{RC:2.78,RS:12.5,RT:0.22}": "tts_RackBerries-Artemis-61_",
      "tts_ChocoLattes-Trooper-60_{RC:6.94,RS:6.94,RT:1}": "tts_ChocoLattes-Trooper-60_",
      "tts_BrasBerries-Perkies-59_{RC:1.39,RS:10.42,RT:0.13}": "tts_BrasBerries-Perkies-59_",
      "tts_BrasBerries-Artemis-58_{RC:1.39,RS:12.5,RT:0.11}": "tts_BrasBerries-Artemis-58_",
      "tts_PassionFronts-Artemis-57_{RC:0.69,RS:12.5,RT:0.06}": "tts_PassionFronts-Artemis-57_",
      "tts_LimeJellies-Perkies-56_{RC:1.39,RS:10.42,RT:0.13}": "tts_LimeJellies-Perkies-56_",
      "tts_RackBerries-Buffies-55_{RC:2.78,RS:6.25,RT:0.44}": "tts_RackBerries-Buffies-55_",
      "tts_CherryBosoms-Perkies-54_{RC:6.25,RS:10.42,RT:0.6}": "tts_CherryBosoms-Perkies-54_",
      "tts_GreenFairies-Artemis-53_{RC:0.69,RS:12.5,RT:0.06}": "tts_GreenFairies-Artemis-53_",
      "tts_ButterUdders-Buffies-52_{RC:8.33,RS:6.25,RT:1.33}": "tts_ButterUdders-Buffies-52_",
      "tts_ChocoLattes-Perkies-51_{RC:6.94,RS:10.42,RT:0.67}": "tts_ChocoLattes-Perkies-51_",
      "tts_GreenTeatea-Artemis-50_{RC:1.39,RS:12.5,RT:0.11}": "tts_GreenTeatea-Artemis-50_",
      "tts_WaterMelons-Artemis-49_{RC:7.64,RS:12.5,RT:0.61}": "tts_WaterMelons-Artemis-49_",
      "tts_ButterUdders-Artemis-48_{RC:8.33,RS:12.5,RT:0.67}": "tts_ButterUdders-Artemis-48_",
      "tts_ChocoLattes-Artemis-47_{RC:6.94,RS:12.5,RT:0.56}": "tts_ChocoLattes-Artemis-47_",
      "tts_GreenTeatea-Trooper-46_{RC:1.39,RS:6.94,RT:0.2}": "tts_GreenTeatea-Trooper-46_",
      "tts_PaPairmint-TotalRecalls-45_{RC:6.94,RS:8.33,RT:0.83}": "tts_PaPairmint-TotalRecalls-45_",
      "tts_WaterMelons-Hypnotits-44_{RC:7.64,RS:7.64,RT:1}": "tts_WaterMelons-Hypnotits-44_",
      "tts_WaterMelons-Perkies-43_{RC:7.64,RS:10.42,RT:0.73}": "tts_WaterMelons-Perkies-43_",
      "tts_CocoNaugthy-Vintties-42_{RC:8.33,RS:7.64,RT:1.09}": "tts_CocoNaugthy-Vintties-42_",
      "tts_PeCans-HolyMels-41_{RC:6.94,RS:8.33,RT:0.83}": "tts_PeCans-HolyMels-41_",
      "tts_WaterMelons-Shaggies-40_{RC:7.64,RS:6.94,RT:1.1}": "tts_WaterMelons-Shaggies-40_",
      "tts_PaPairmint-Oh Buoys-39_{RC:6.94,RS:8.33,RT:0.83}": "tts_PaPairmint-Oh Buoys-39_",
      "tts_PeCans-TotalRecalls-38_{RC:6.94,RS:8.33,RT:0.83}": "tts_PeCans-TotalRecalls-38_",
      "tts_PeCans-Artemis-37_{RC:6.94,RS:12.5,RT:0.56}": "tts_PeCans-Artemis-37_",
      "tts_CocoNaugthy-HolyMels-36_{RC:8.33,RS:8.33,RT:1}": "tts_CocoNaugthy-HolyMels-36_",
      "tts_CupCakes-Spades-35_{RC:8.33,RS:8.33,RT:1}": "tts_CupCakes-Spades-35_",
      "tts_TataColadas-Buffies-34_{RC:7.64,RS:6.25,RT:1.22}": "tts_TataColadas-Buffies-34_",
      "tts_PaPairmint-HolyMels-33_{RC:6.94,RS:8.33,RT:0.83}": "tts_PaPairmint-HolyMels-33_",
      "tts_PeCans-Vintties-32_{RC:6.94,RS:7.64,RT:0.91}": "tts_PeCans-Vintties-32_",
      "tts_CupCakes-Oh Buoys-31_{RC:8.33,RS:8.33,RT:1}": "tts_CupCakes-Oh Buoys-31_",
      "tts_CherryBosoms-Hoots-30_{RC:6.25,RS:8.33,RT:0.75}": "tts_CherryBosoms-Hoots-30_",
      "tts_CherryBosoms-Buffies-29_{RC:6.25,RS:6.25,RT:1}": "tts_CherryBosoms-Buffies-29_",
      "tts_ChocoLattes-Buffies-28_{RC:6.94,RS:6.25,RT:1.11}": "tts_ChocoLattes-Buffies-28_",
      "tts_BooBerries-Oh Buoys-27_{RC:7.64,RS:8.33,RT:0.92}": "tts_BooBerries-Oh Buoys-27_",
      "tts_CherryBosoms-Trooper-26_{RC:6.25,RS:6.94,RT:0.9}": "tts_CherryBosoms-Trooper-26_",
      "tts_PaPairmint-Hypnotits-25_{RC:6.94,RS:7.64,RT:0.91}": "tts_PaPairmint-Hypnotits-25_",
      "tts_ButterUdders-Trooper-24_{RC:8.33,RS:6.94,RT:1.2}": "tts_ButterUdders-Trooper-24_",
      "tts_PeCans-Trooper-23_{RC:6.94,RS:6.94,RT:1}": "tts_PeCans-Trooper-23_",
      "tts_PeCans-Hypnotits-22_{RC:6.94,RS:7.64,RT:0.91}": "tts_PeCans-Hypnotits-22_",
      "tts_TataColadas-Oh Buoys-21_{RC:7.64,RS:8.33,RT:0.92}": "tts_TataColadas-Oh Buoys-21_",
      "tts_CherryBosoms-Spades-20_{RC:6.25,RS:8.33,RT:0.75}": "tts_CherryBosoms-Spades-20_",
      "tts_ButterUdders-Perkies-19_{RC:8.33,RS:10.42,RT:0.8}": "tts_ButterUdders-Perkies-19_",
      "tts_ButterUdders-TotalRecalls-18_{RC:8.33,RS:8.33,RT:1}": "tts_ButterUdders-TotalRecalls-18_",
      "tts_CherryBosoms-Artemis-17_{RC:0.69,RS:12.5,RT:0.06}": "tts_CherryBosoms-Artemis-17_",
      "tts_PeCans-Oh Buoys-16_{RC:6.94,RS:8.33,RT:0.83}": "tts_PeCans-Oh Buoys-16_",
      "tts_CupCakes-Artemis-15_{RC:8.33,RS:12.5,RT:0.67}": "tts_CupCakes-Artemis-15_",
      "tts_ButterUdders-Hypnotits-14_{RC:8.33,RS:7.64,RT:1.09}": "tts_ButterUdders-Hypnotits-14_",
      "tts_CocoNaugthy-Spades-13_{RC:8.33,RS:8.33,RT:1}": "tts_CocoNaugthy-Spades-13_",
      "tts_CocoNaugthy-Buffies-12_{RC:8.33,RS:6.25,RT:1.33}": "tts_CocoNaugthy-Buffies-12_",
      "tts_ChocoLattes-Spades-11_{RC:6.94,RS:8.33,RT:0.83}": "tts_ChocoLattes-Spades-11_",
      "tts_CherryBosoms-Oh Buoys-10_{RC:6.25,RS:8.33,RT:0.75}": "tts_CherryBosoms-Oh Buoys-10_",
      "tts_ButterUdders-Oh Buoys-9_{RC:8.33,RS:8.33,RT:1}": "tts_ButterUdders-Oh Buoys-9_",
      "tts_BooBerries-Hoots-8_{RC:7.64,RS:8.33,RT:0.92}": "tts_BooBerries-Hoots-8_",
      "tts_StarBust-Hoots-7_{RC:8.33,RS:8.33,RT:1}": "tts_StarBust-Hoots-7_",
      "tts_CocoNaugthy-Shaggies-6_{RC:8.33,RS:6.94,RT:1.2}": "tts_CocoNaugthy-Shaggies-6_",
      "tts_CocoNaugthy-Oh Buoys-5_{RC:8.33,RS:8.33,RT:1}": "tts_CocoNaugthy-Oh Buoys-5_",
      "tts_CocoNaugthy-TotalRecalls-4_{RC:8.33,RS:8.33,RT:1}": "tts_CocoNaugthy-TotalRecalls-4_",
      "tts_CocoNaugthy-Artemis-3_{RC:8.33,RS:12.5,RT:0.67}": "tts_CocoNaugthy-Artemis-3_",
      "tts_ChocoLattes-Oh Buoys-2_{RC:0.69,RS:8.33,RT:0.08}": "tts_ChocoLattes-Oh Buoys-2_",
      "tts_CocoNaugthy-Trooper-1_{RC:8.33,RS:6.94,RT:1.2}": "tts_CocoNaugthy-Trooper-1_"
  
    };
    

    var newMapping  = {
      '1': 'tts_CocoNaugthy-Trooper-1_RC-833_RS-694_RT-12_',
      '2': 'tts_ChocoLattes-Oh Buoys-2_RC-069_RS-833_RT-008_',
      '3': 'tts_CocoNaugthy-Artemis-3_RC-833_RS-125_RT-067_',
      '4': 'tts_CocoNaugthy-TotalRecalls-4_RC-833_RS-833_RT-1_',
      '5': 'tts_CocoNaugthy-Oh Buoys-5_RC-833_RS-833_RT-1_',
      '6': 'tts_CocoNaugthy-Shaggies-6_RC-833_RS-694_RT-12_',
      '7': 'tts_StarBust-Hoots-7_RC-833_RS-833_RT-1_',
      '8': 'tts_BooBerries-Hoots-8_RC-764_RS-833_RT-092_',
      '9': 'tts_ButterUdders-Oh Buoys-9_RC-833_RS-833_RT-1_',
      '10': 'tts_CherryBosoms-Oh Buoys-10_RC-625_RS-833_RT-075_',
      '11': 'tts_ChocoLattes-Spades-11_RC-694_RS-833_RT-083_',
      '12': 'tts_CocoNaugthy-Buffies-12_RC-833_RS-625_RT-133_',
      '13': 'tts_CocoNaugthy-Spades-13_RC-833_RS-833_RT-1_',
      '14': 'tts_ButterUdders-Hypnotits-14_RC-833_RS-764_RT-109_',
      '15': 'tts_CupCakes-Artemis-15_RC-833_RS-125_RT-067_',
      '16': 'tts_PeCans-Oh Buoys-16_RC-694_RS-833_RT-083_',
      '17': 'tts_CherryBosoms-Artemis-17_RC-069_RS-125_RT-006_',
      '18': 'tts_ButterUdders-TotalRecalls-18_RC-833_RS-833_RT-1_',
      '19': 'tts_ButterUdders-Perkies-19_RC-833_RS-1042_RT-08_',
      '20': 'tts_CherryBosoms-Spades-20_RC-625_RS-833_RT-075_',
      '21': 'tts_TataColadas-Oh Buoys-21_RC-764_RS-833_RT-092_',
      '22': 'tts_PeCans-Hypnotits-22_RC-694_RS-764_RT-091_',
      '23': 'tts_PeCans-Trooper-23_RC-694_RS-694_RT-1_',
      '24': 'tts_ButterUdders-Trooper-24_RC-833_RS-694_RT-12_',
      '25': 'tts_PaPairmint-Hypnotits-25_RC-694_RS-764_RT-091_',
      '26': 'tts_CherryBosoms-Trooper-26_RC-625_RS-694_RT-09_',
      '27': 'tts_BooBerries-Oh Buoys-27_RC-764_RS-833_RT-092_',
      '28': 'tts_ChocoLattes-Buffies-28_RC-694_RS-625_RT-111_',
      '29': 'tts_CherryBosoms-Buffies-29_RC-625_RS-625_RT-1_',
      '30': 'tts_CherryBosoms-Hoots-30_RC-625_RS-833_RT-075_',
      '31': 'tts_CupCakes-Oh Buoys-31_RC-833_RS-833_RT-1_',
      '32': 'tts_PeCans-Vintties-32_RC-694_RS-764_RT-091_',
      '33': 'tts_PaPairmint-HolyMels-33_RC-694_RS-833_RT-083_',
      '34': 'tts_TataColadas-Buffies-34_RC-764_RS-625_RT-122_',
      '35': 'tts_CupCakes-Spades-35_RC-833_RS-833_RT-1_',
      '36': 'tts_CocoNaugthy-HolyMels-36_RC-833_RS-833_RT-1_',
      '37': 'tts_PeCans-Artemis-37_RC-694_RS-125_RT-056_',
      '38': 'tts_PeCans-TotalRecalls-38_RC-694_RS-833_RT-083_',
      '39': 'tts_PaPairmint-Oh Buoys-39_RC-694_RS-833_RT-083_',
      '40': 'tts_WaterMelons-Shaggies-40_RC-764_RS-694_RT-11_',
      '41': 'tts_PeCans-HolyMels-41_RC-694_RS-833_RT-083_',
      '42': 'tts_CocoNaugthy-Vintties-42_RC-833_RS-764_RT-109_',
      '43': 'tts_WaterMelons-Perkies-43_RC-764_RS-1042_RT-073_',
      '44': 'tts_WaterMelons-Hypnotits-44_RC-764_RS-764_RT-1_',
      '45': 'tts_PaPairmint-TotalRecalls-45_RC-694_RS-833_RT-083_',
      '46': 'tts_GreenTeatea-Trooper-46_RC-139_RS-694_RT-02_',
      '47': 'tts_ChocoLattes-Artemis-47_RC-694_RS-125_RT-056_',
      '48': 'tts_ButterUdders-Artemis-48_RC-833_RS-125_RT-067_',
      '49': 'tts_WaterMelons-Artemis-49_RC-764_RS-125_RT-061_',
      '50': 'tts_GreenTeatea-Artemis-50_RC-139_RS-125_RT-011_',
      '51': 'tts_ChocoLattes-Perkies-51_RC-694_RS-1042_RT-067_',
      '52': 'tts_ButterUdders-Buffies-52_RC-833_RS-625_RT-133_',
      '53': 'tts_GreenFairies-Artemis-53_RC-069_RS-125_RT-006_',
      '54': 'tts_CherryBosoms-Perkies-54_RC-625_RS-1042_RT-06_',
      '55': 'tts_RackBerries-Buffies-55_RC-278_RS-625_RT-044_',
      '56': 'tts_LimeJellies-Perkies-56_RC-139_RS-1042_RT-013_',
      '57': 'tts_PassionFronts-Artemis-57_RC-069_RS-125_RT-006_',
      '58': 'tts_BrasBerries-Artemis-58_RC-139_RS-125_RT-011_',
      '59': 'tts_BrasBerries-Perkies-59_RC-139_RS-1042_RT-013_',
      '60': 'tts_ChocoLattes-Trooper-60_RC-694_RS-694_RT-1_',
      '61': 'tts_RackBerries-Artemis-61_RC-278_RS-125_RT-022_',
      '62': 'tts_RackBerries-Perkies-62_RC-278_RS-1042_RT-027_',
      '63': 'tts_LimeJellies-Artemis-63_RC-139_RS-125_RT-011_',
      '64': 'tts_RackBerries-Shaggies-64_RC-278_RS-694_RT-04_',
      '65': 'tts_CherryBosoms-Shaggies-65_RC-625_RS-694_RT-09_',
      '66': 'tts_PurpleHush-Perkies-66_RC-694_RS-1042_RT-067_',
      '67': 'tts_StarBust-Oh Buoys-67_RC-833_RS-833_RT-1_',
      '68': 'tts_WaterMelons-HolyMels-68_RC-764_RS-833_RT-092_',
      '69': 'tts_TataColadas-Vintties-69_RC-764_RS-764_RT-1_',
      '70': 'tts_WaterMelons-Vintties-70_RC-764_RS-764_RT-1_',
      '71': 'tts_ButterUdders-Hoots-71_RC-833_RS-833_RT-1_',
      '72': 'tts_BooBerries-Trooper-72_RC-764_RS-694_RT-11_',
      '73': 'tts_ButterUdders-Spades-73_RC-833_RS-833_RT-1_',
      '74': 'tts_ButterUdders-Shaggies-74_RC-833_RS-694_RT-12_',
      '75': 'tts_ChocoLattes-Hypnotits-75_RC-694_RS-764_RT-091_',
      '76': 'tts_TataColadas-Spades-76_RC-764_RS-833_RT-092_',
      '77': 'tts_TataColadas-Hypnotits-77_RC-764_RS-764_RT-1_',
      '78': 'tts_StarBust-Perkies-78_RC-833_RS-1042_RT-08_',
      '79': 'tts_WaterMelons-Trooper-79_RC-764_RS-694_RT-11_',
      '80': 'tts_TataColadas-HolyMels-80_RC-764_RS-833_RT-092_',
      '81': 'tts_TataColadas-TotalRecalls-81_RC-764_RS-833_RT-092_',
      '82': 'tts_TataColadas-Shaggies-82_RC-764_RS-694_RT-11_',
      '83': 'tts_StarBust-Trooper-83_RC-833_RS-694_RT-12_',
      '84': 'tts_PurpleHush-Hypnotits-84_RC-694_RS-764_RT-091_',
      '85': 'tts_BooBerries-Hypnotits-85_RC-764_RS-764_RT-1_',
      '86': 'tts_PaPairmint-Artemis-86_RC-694_RS-125_RT-056_',
      '87': 'tts_StarBust-Buffies-87_RC-833_RS-625_RT-133_',
      '88': 'tts_PurpleHush-Artemis-88_RC-694_RS-125_RT-056_',
      '89': 'tts_TataColadas-Perkies-89_RC-764_RS-1042_RT-073_',
      '90': 'tts_BooBerries-Perkies-90_RC-764_RS-1042_RT-073_',
      '91': 'tts_CocoNaugthy-Hoots-91_RC-833_RS-833_RT-1_',
      '92': 'tts_CupCakes-HolyMels-92_RC-833_RS-833_RT-1_',
      '93': 'tts_CherryBosoms-HolyMels-93_RC-625_RS-833_RT-075_',
      '94': 'tts_ChocoLattes-TotalRecalls-94_RC-694_RS-833_RT-083_',
      '95': 'tts_PaPairmint-Vintties-95_RC-694_RS-764_RT-091_',
      '96': 'tts_TataColadas-Artemis-96_RC-764_RS-125_RT-061_',
      '97': 'tts_BooBerries-Artemis-97_RC-764_RS-125_RT-061_',
      '98': 'tts_CupCakes-Buffies-98_RC-833_RS-625_RT-133_',
      '99': 'tts_ChocoLattes-HolyMels-99_RC-694_RS-833_RT-083_',
      '100': 'tts_CupCakes-Hoots-100_RC-833_RS-833_RT-1_',
      '101': 'tts_TataColadas-Hoots-101_RC-764_RS-833_RT-092_',
      '102': 'tts_BooBerries-Shaggies-102_RC-764_RS-694_RT-11_',
      '103': 'tts_CupCakes-Hypnotits-103_RC-833_RS-764_RT-109_',
      '104': 'tts_ChocoLattes-Hoots-104_RC-694_RS-833_RT-083_',
      '105': 'tts_PurpleHush-Oh Buoys-105_RC-694_RS-833_RT-083_',
      '106': 'tts_PaPairmint-Hoots-106_RC-694_RS-833_RT-083_',
      '107': 'tts_StarBust-TotalRecalls-107_RC-833_RS-833_RT-1_',
      '108': 'tts_PurpleHush-HolyMels-108_RC-694_RS-833_RT-083_',
      '109': 'tts_ButterUdders-Vintties-109_RC-833_RS-764_RT-109_',
      '110': 'tts_PaPairmint-Spades-110_RC-694_RS-833_RT-083_',
      '111': 'tts_ButterUdders-HolyMels-111_RC-833_RS-833_RT-1_',
      '112': 'tts_CupCakes-Vintties-112_RC-833_RS-764_RT-109_',
      '113': 'tts_PurpleHush-Shaggies-113_RC-694_RS-694_RT-1_',
      '114': 'tts_PaPairmint-Buffies-114_RC-694_RS-625_RT-111_',
      '115': 'tts_PurpleHush-Vintties-115_RC-694_RS-764_RT-091_',
      '116': 'tts_StarBust-Vintties-116_RC-833_RS-764_RT-109_',
      '117': 'tts_PeCans-Hoots-117_RC-694_RS-833_RT-083_',
      '118': 'tts_PaPairmint-Perkies-118_RC-694_RS-1042_RT-067_',
      '119': 'tts_PeCans-Spades-119_RC-694_RS-833_RT-083_',
      '120': 'tts_BooBerries-HolyMels-120_RC-764_RS-833_RT-092_',
      '121': 'tts_CupCakes-Shaggies-121_RC-833_RS-694_RT-12_',
      '122': 'tts_CupCakes-Perkies-122_RC-833_RS-1042_RT-08_',
      '123': 'tts_WaterMelons-Hoots-123_RC-764_RS-833_RT-092_',
      '124': 'tts_BooBerries-TotalRecalls-124_RC-764_RS-833_RT-092_',
      '125': 'tts_BooBerries-Spades-125_RC-764_RS-833_RT-092_',
      '126': 'tts_CocoNaugthy-Hypnotits-126_RC-833_RS-764_RT-109_',
      '127': 'tts_CupCakes-Trooper-127_RC-833_RS-694_RT-12_',
      '128': 'tts_StarBust-Spades-128_RC-833_RS-833_RT-1_',
      '129': 'tts_PurpleHush-TotalRecalls-129_RC-694_RS-833_RT-083_',
      '130': 'tts_CupCakes-TotalRecalls-130_RC-833_RS-833_RT-1_',
      '131': 'tts_WaterMelons-TotalRecalls-131_RC-764_RS-833_RT-092_',
      '132': 'tts_StarBust-Hypnotits-132_RC-833_RS-764_RT-109_',
      '133': 'tts_WaterMelons-Spades-133_RC-764_RS-833_RT-092_',
      '134': 'tts_PeCans-Perkies-134_RC-694_RS-1042_RT-067_',
      '135': 'tts_BooBerries-Vintties-135_RC-764_RS-764_RT-1_',
      '136': 'tts_PurpleHush-Spades-136_RC-694_RS-833_RT-083_',
      '137': 'tts_CocoNaugthy-Perkies-137_RC-833_RS-1042_RT-08_',
      '138': 'tts_ChocoLattes-Vintties-138_RC-694_RS-764_RT-091_',
      '139': 'tts_StarBust-HolyMels-139_RC-833_RS-833_RT-1_',
      '140': 'tts_StarBust-Artemis-140_RC-833_RS-125_RT-067_',
      '141': 'tts_PurpleHush-Hoots-141_RC-694_RS-833_RT-083_',
      '142': 'tts_StarBust-Shaggies-142_RC-833_RS-694_RT-12_',
      '143': 'tts_WaterMelons-Oh Buoys-143_RC-764_RS-833_RT-092_',
      '144': 'tts_CherryBosoms-TotalRecalls-144_RC-625_RS-833_RT-075_'
    };
  
    /* for (var oldKey in mapping) {
        var newValue = changeKeys(oldKey);
        var newKey = newKeys(newValue);
        newMapping[newKey] = newValue;
    }
 */
    var doc = app.activeDocument;
    var symbols = doc.symbols;

    for (var i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        var symbolName = symbol.name;
        var symbolNumber = getSymbolNumber(symbolName);
        var newSymbolName = newMapping[symbolNumber];
        if (newSymbolName) {
            symbol.name = newSymbolName;
        }
    }

  
    
    return newMapping;
  }

  function changeKeys(str) {
    
    var regex = /(\d+)_{(.*?)}/;

    var match = str.match(regex);
    var num = match[1];
    var values = match[2].split(",");

    var result = str.replace(regex, num + "_");
    for (var i = 0; i < values.length; i++) {
      var keyVal = values[i].split(":");
      var key = keyVal[0];
      var val = keyVal[1].replace(".", "");
      result += key + "-" + val + "_";
    }

    return result;
  }

  function newKeys(str) {
    var regex = /(\d+)/;
    var key = regex.exec(str)[0];
    
    return key;
  }

  function getSymbolNumber(symbolName) {
    var regex = /(\d+)/;
    var match = symbolName.match(regex);
    var number = match[1];
    return number;

  }
  
  var cleanedMapping = cleanMapping();