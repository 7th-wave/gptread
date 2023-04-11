

  function cleanMapping() {
    var mapping = {
      "tts_CherryBosoms-TotalRecalls-144_{RC:6.25,RS:8.33,RT:0.75}":"tts_CherryBosoms-TotalRecalls-144_",
      "tts_WaterMelons-OhBuoys-143_{RC:7.64,RS:8.33,RT:0.92}": "tts_WaterMelons-OhBuoys-143_",
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
      "tts_StarBust-HypnoTits-132_{RC:8.33,RS:7.64,RT:1.09}": "tts_StarBust-HypnoTits-132_",
      "tts_WaterMelons-TotalRecalls-131_{RC:7.64,RS:8.33,RT:0.92}": "tts_WaterMelons-TotalRecalls-131_",
      "tts_CupCakes-TotalRecalls-130_{RC:8.33,RS:8.33,RT:1}": "tts_CupCakes-TotalRecalls-130_",
      "tts_PurpleHush-TotalRecalls-129_{RC:6.94,RS:8.33,RT:0.83}": "tts_PurpleHush-TotalRecalls-129_",
      "tts_StarBust-Spades-128_{RC:8.33,RS:8.33,RT:1}": "tts_StarBust-Spades-128_",
      "tts_CupCakes-Trooper-127_{RC:8.33,RS:6.94,RT:1.2}": "tts_CupCakes-Trooper-127_",
      "tts_CocoNaugthy-HypnoTits-126_{RC:8.33,RS:7.64,RT:1.09}": "tts_CocoNaugthy-HypnoTits-126_",
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
      "tts_PurpleHush-OhBuoys-105_{RC:6.94,RS:8.33,RT:0.83}": "tts_PurpleHush-OhBuoys-105_",
      "tts_ChocoLattes-Hoots-104_{RC:6.94,RS:8.33,RT:0.83}": "tts_ChocoLattes-Hoots-104_",
      "tts_CupCakes-HypnoTits-103_{RC:8.33,RS:7.64,RT:1.09}": "tts_CupCakes-HypnoTits-103_",
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
      "tts_BooBerries-HypnoTits-85_{RC:7.64,RS:7.64,RT:1}": "tts_BooBerries-HypnoTits-85_",
      "tts_PurpleHush-HypnoTits-84_{RC:6.94,RS:7.64,RT:0.91}": "tts_PurpleHush-HypnoTits-84_",
      "tts_StarBust-Trooper-83_{RC:8.33,RS:6.94,RT:1.2}": "tts_StarBust-Trooper-83_",
      "tts_TataColadas-Shaggies-82_{RC:7.64,RS:6.94,RT:1.1}": "tts_TataColadas-Shaggies-82_",
      "tts_TataColadas-TotalRecalls-81_{RC:7.64,RS:8.33,RT:0.92}": "tts_TataColadas-TotalRecalls-81_",
      "tts_TataColadas-HolyMels-80_{RC:7.64,RS:8.33,RT:0.92}": "tts_TataColadas-HolyMels-80_",
      "tts_WaterMelons-Trooper-79_{RC:7.64,RS:6.94,RT:1.1}": "tts_WaterMelons-Trooper-79_",
      "tts_StarBust-Perkies-78_{RC:8.33,RS:10.42,RT:0.8}": "tts_StarBust-Perkies-78_",
      "tts_TataColadas-HypnoTits-77_{RC:7.64,RS:7.64,RT:1}": "tts_TataColadas-HypnoTits-77_",
      "tts_TataColadas-Spades-76_{RC:7.64,RS:8.33,RT:0.92}": "tts_TataColadas-Spades-76_",
      "tts_ChocoLattes-HypnoTits-75_{RC:6.94,RS:7.64,RT:0.91}": "tts_ChocoLattes-HypnoTits-75_",
      "tts_ButterUdders-Shaggies-74_{RC:8.33,RS:6.94,RT:1.2}": "tts_ButterUdders-Shaggies-74_",
      "tts_ButterUdders-Spades-73_{RC:8.33,RS:8.33,RT:1}": "tts_ButterUdders-Spades-73_",
      "tts_BooBerries-Trooper-72_{RC:7.64,RS:6.94,RT:1.1}": "tts_BooBerries-Trooper-72_",
      "tts_ButterUdders-Hoots-71_{RC:8.33,RS:8.33,RT:1}": "tts_ButterUdders-Hoots-71_",
      "tts_WaterMelons-Vintties-70_{RC:7.64,RS:7.64,RT:1}": "tts_WaterMelons-Vintties-70_",
      "tts_TataColadas-Vintties-69_{RC:7.64,RS:7.64,RT:1}": "tts_TataColadas-Vintties-69_",
      "tts_WaterMelons-HolyMels-68_{RC:7.64,RS:8.33,RT:0.92}": "tts_WaterMelons-HolyMels-68_",
      "tts_StarBust-OhBuoys-67_{RC:8.33,RS:8.33,RT:1}": "tts_StarBust-OhBuoys-67_",
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
      "tts_WaterMelons-HypnoTits-44_{RC:7.64,RS:7.64,RT:1}": "tts_WaterMelons-HypnoTits-44_",
      "tts_WaterMelons-Perkies-43_{RC:7.64,RS:10.42,RT:0.73}": "tts_WaterMelons-Perkies-43_",
      "tts_CocoNaugthy-Vintties-42_{RC:8.33,RS:7.64,RT:1.09}": "tts_CocoNaugthy-Vintties-42_",
      "tts_PeCans-HolyMels-41_{RC:6.94,RS:8.33,RT:0.83}": "tts_PeCans-HolyMels-41_",
      "tts_WaterMelons-Shaggies-40_{RC:7.64,RS:6.94,RT:1.1}": "tts_WaterMelons-Shaggies-40_",
      "tts_PaPairmint-OhBuoys-39_{RC:6.94,RS:8.33,RT:0.83}": "tts_PaPairmint-OhBuoys-39_",
      "tts_PeCans-TotalRecalls-38_{RC:6.94,RS:8.33,RT:0.83}": "tts_PeCans-TotalRecalls-38_",
      "tts_PeCans-Artemis-37_{RC:6.94,RS:12.5,RT:0.56}": "tts_PeCans-Artemis-37_",
      "tts_CocoNaugthy-HolyMels-36_{RC:8.33,RS:8.33,RT:1}": "tts_CocoNaugthy-HolyMels-36_",
      "tts_CupCakes-Spades-35_{RC:8.33,RS:8.33,RT:1}": "tts_CupCakes-Spades-35_",
      "tts_TataColadas-Buffies-34_{RC:7.64,RS:6.25,RT:1.22}": "tts_TataColadas-Buffies-34_",
      "tts_PaPairmint-HolyMels-33_{RC:6.94,RS:8.33,RT:0.83}": "tts_PaPairmint-HolyMels-33_",
      "tts_PeCans-Vintties-32_{RC:6.94,RS:7.64,RT:0.91}": "tts_PeCans-Vintties-32_",
      "tts_CupCakes-OhBuoys-31_{RC:8.33,RS:8.33,RT:1}": "tts_CupCakes-OhBuoys-31_",
      "tts_CherryBosoms-Hoots-30_{RC:6.25,RS:8.33,RT:0.75}": "tts_CherryBosoms-Hoots-30_",
      "tts_CherryBosoms-Buffies-29_{RC:6.25,RS:6.25,RT:1}": "tts_CherryBosoms-Buffies-29_",
      "tts_ChocoLattes-Buffies-28_{RC:6.94,RS:6.25,RT:1.11}": "tts_ChocoLattes-Buffies-28_",
      "tts_BooBerries-OhBuoys-27_{RC:7.64,RS:8.33,RT:0.92}": "tts_BooBerries-OhBuoys-27_",
      "tts_CherryBosoms-Trooper-26_{RC:6.25,RS:6.94,RT:0.9}": "tts_CherryBosoms-Trooper-26_",
      "tts_PaPairmint-HypnoTits-25_{RC:6.94,RS:7.64,RT:0.91}": "tts_PaPairmint-HypnoTits-25_",
      "tts_ButterUdders-Trooper-24_{RC:8.33,RS:6.94,RT:1.2}": "tts_ButterUdders-Trooper-24_",
      "tts_PeCans-Trooper-23_{RC:6.94,RS:6.94,RT:1}": "tts_PeCans-Trooper-23_",
      "tts_PeCans-HypnoTits-22_{RC:6.94,RS:7.64,RT:0.91}": "tts_PeCans-HypnoTits-22_",
      "tts_TataColadas-OhBuoys-21_{RC:7.64,RS:8.33,RT:0.92}": "tts_TataColadas-OhBuoys-21_",
      "tts_CherryBosoms-Spades-20_{RC:6.25,RS:8.33,RT:0.75}": "tts_CherryBosoms-Spades-20_",
      "tts_ButterUdders-Perkies-19_{RC:8.33,RS:10.42,RT:0.8}": "tts_ButterUdders-Perkies-19_",
      "tts_ButterUdders-TotalRecalls-18_{RC:8.33,RS:8.33,RT:1}": "tts_ButterUdders-TotalRecalls-18_",
      "tts_CherryBosoms-Artemis-17_{RC:0.69,RS:12.5,RT:0.06}": "tts_CherryBosoms-Artemis-17_",
      "tts_PeCans-OhBuoys-16_{RC:6.94,RS:8.33,RT:0.83}": "tts_PeCans-OhBuoys-16_",
      "tts_CupCakes-Artemis-15_{RC:8.33,RS:12.5,RT:0.67}": "tts_CupCakes-Artemis-15_",
      "tts_ButterUdders-HypnoTits-14_{RC:8.33,RS:7.64,RT:1.09}": "tts_ButterUdders-HypnoTits-14_",
      "tts_CocoNaugthy-Spades-13_{RC:8.33,RS:8.33,RT:1}": "tts_CocoNaugthy-Spades-13_",
      "tts_CocoNaugthy-Buffies-12_{RC:8.33,RS:6.25,RT:1.33}": "tts_CocoNaugthy-Buffies-12_",
      "tts_ChocoLattes-Spades-11_{RC:6.94,RS:8.33,RT:0.83}": "tts_ChocoLattes-Spades-11_",
      "tts_CherryBosoms-OhBuoys-10_{RC:6.25,RS:8.33,RT:0.75}": "tts_CherryBosoms-OhBuoys-10_",
      "tts_ButterUdders-OhBuoys-9_{RC:8.33,RS:8.33,RT:1}": "tts_ButterUdders-OhBuoys-9_",
      "tts_BooBerries-Hoots-8_{RC:7.64,RS:8.33,RT:0.92}": "tts_BooBerries-Hoots-8_",
      "tts_StarBust-Hoots-7_{RC:8.33,RS:8.33,RT:1}": "tts_StarBust-Hoots-7_",
      "tts_CocoNaugthy-Shaggies-6_{RC:8.33,RS:6.94,RT:1.2}": "tts_CocoNaugthy-Shaggies-6_",
      "tts_CocoNaugthy-OhBuoys-5_{RC:8.33,RS:8.33,RT:1}": "tts_CocoNaugthy-OhBuoys-5_",
      "tts_CocoNaugthy-TotalRecalls-4_{RC:8.33,RS:8.33,RT:1}": "tts_CocoNaugthy-TotalRecalls-4_",
      "tts_CocoNaugthy-Artemis-3_{RC:8.33,RS:12.5,RT:0.67}": "tts_CocoNaugthy-Artemis-3_",
      "tts_ChocoLattes-OhBuoys-2_{RC:0.69,RS:8.33,RT:0.08}": "tts_ChocoLattes-OhBuoys-2_",
      "tts_CocoNaugthy-Trooper-1_{RC:8.33,RS:6.94,RT:1.2}": "tts_CocoNaugthy-Trooper-1_"
  
    };

    var newMapping = {
      'CherryBosoms-TotalRecalls': 'tts_CherryBosoms-TotalRecalls_144_RC-625_RS-833_RT-75',
      'WaterMelons-OhBuoys': 'tts_WaterMelons-OhBuoys_143_RC-764_RS-833_RT-92',
      'StarBust-Shaggies': 'tts_StarBust-Shaggies_142_RC-833_RS-694_RT-120',
      'PurpleHush-Hoots': 'tts_PurpleHush-Hoots_141_RC-694_RS-833_RT-83',
      'StarBust-Artemis': 'tts_StarBust-Artemis_140_RC-833_RS-1250_RT-67',
      'StarBust-HolyMels': 'tts_StarBust-HolyMels_139_RC-833_RS-833_RT-100',
      'ChocoLattes-Vintties': 'tts_ChocoLattes-Vintties_138_RC-694_RS-764_RT-91',
      'CocoNaugthy-Perkies': 'tts_CocoNaugthy-Perkies_137_RC-833_RS-1042_RT-80',
      'PurpleHush-Spades': 'tts_PurpleHush-Spades_136_RC-694_RS-833_RT-83',
      'BooBerries-Vintties': 'tts_BooBerries-Vintties_135_RC-764_RS-764_RT-100',
      'PeCans-Perkies': 'tts_PeCans-Perkies_134_RC-694_RS-1042_RT-67',
      'WaterMelons-Spades': 'tts_WaterMelons-Spades_133_RC-764_RS-833_RT-92',
      'StarBust-HypnoTits': 'tts_StarBust-HypnoTits_132_RC-833_RS-764_RT-109',
      'WaterMelons-TotalRecalls': 'tts_WaterMelons-TotalRecalls_131_RC-764_RS-833_RT-92',
      'CupCakes-TotalRecalls': 'tts_CupCakes-TotalRecalls_130_RC-833_RS-833_RT-100',
      'PurpleHush-TotalRecalls': 'tts_PurpleHush-TotalRecalls_129_RC-694_RS-833_RT-83',
      'StarBust-Spades': 'tts_StarBust-Spades_128_RC-833_RS-833_RT-100',
      'CupCakes-Trooper': 'tts_CupCakes-Trooper_127_RC-833_RS-694_RT-120',
      'CocoNaugthy-HypnoTits': 'tts_CocoNaugthy-HypnoTits_126_RC-833_RS-764_RT-109',
      'BooBerries-Spades': 'tts_BooBerries-Spades_125_RC-764_RS-833_RT-92',
      'BooBerries-TotalRecalls': 'tts_BooBerries-TotalRecalls_124_RC-764_RS-833_RT-92',
      'WaterMelons-Hoots': 'tts_WaterMelons-Hoots_123_RC-764_RS-833_RT-92',
      'CupCakes-Perkies': 'tts_CupCakes-Perkies_122_RC-833_RS-1042_RT-80',
      'CupCakes-Shaggies': 'tts_CupCakes-Shaggies_121_RC-833_RS-694_RT-120',
      'BooBerries-HolyMels': 'tts_BooBerries-HolyMels_120_RC-764_RS-833_RT-92',
      'PeCans-Spades': 'tts_PeCans-Spades_119_RC-694_RS-833_RT-83',
      'PaPairmint-Perkies': 'tts_PaPairmint-Perkies_118_RC-694_RS-1042_RT-67',
      'PeCans-Hoots': 'tts_PeCans-Hoots_117_RC-694_RS-833_RT-83',
      'StarBust-Vintties': 'tts_StarBust-Vintties_116_RC-833_RS-764_RT-109',
      'PurpleHush-Vintties': 'tts_PurpleHush-Vintties_115_RC-694_RS-764_RT-91',
      'PaPairmint-Buffies': 'tts_PaPairmint-Buffies_114_RC-694_RS-625_RT-111',
      'PurpleHush-Shaggies': 'tts_PurpleHush-Shaggies_113_RC-694_RS-694_RT-100',
      'CupCakes-Vintties': 'tts_CupCakes-Vintties_112_RC-833_RS-764_RT-109',
      'ButterUdders-HolyMels': 'tts_ButterUdders-HolyMels_111_RC-833_RS-833_RT-100',
      'PaPairmint-Spades': 'tts_PaPairmint-Spades_110_RC-694_RS-833_RT-83',
      'ButterUdders-Vintties': 'tts_ButterUdders-Vintties_109_RC-833_RS-764_RT-109',
      'PurpleHush-HolyMels': 'tts_PurpleHush-HolyMels_108_RC-694_RS-833_RT-83',
      'StarBust-TotalRecalls': 'tts_StarBust-TotalRecalls_107_RC-833_RS-833_RT-100',
      'PaPairmint-Hoots': 'tts_PaPairmint-Hoots_106_RC-694_RS-833_RT-83',
      'PurpleHush-OhBuoys': 'tts_PurpleHush-OhBuoys_105_RC-694_RS-833_RT-83',
      'ChocoLattes-Hoots': 'tts_ChocoLattes-Hoots_104_RC-694_RS-833_RT-83',
      'CupCakes-HypnoTits': 'tts_CupCakes-HypnoTits_103_RC-833_RS-764_RT-109',
      'BooBerries-Shaggies': 'tts_BooBerries-Shaggies_102_RC-764_RS-694_RT-110',
      'TataColadas-Hoots': 'tts_TataColadas-Hoots_101_RC-764_RS-833_RT-92',
      'CupCakes-Hoots': 'tts_CupCakes-Hoots_100_RC-833_RS-833_RT-100',
      'ChocoLattes-HolyMels': 'tts_ChocoLattes-HolyMels_99_RC-694_RS-833_RT-83',
      'CupCakes-Buffies': 'tts_CupCakes-Buffies_98_RC-833_RS-625_RT-133',
      'BooBerries-Artemis': 'tts_BooBerries-Artemis_97_RC-764_RS-1250_RT-61',
      'TataColadas-Artemis': 'tts_TataColadas-Artemis_96_RC-764_RS-1250_RT-61',
      'PaPairmint-Vintties': 'tts_PaPairmint-Vintties_95_RC-694_RS-764_RT-91',
      'ChocoLattes-TotalRecalls': 'tts_ChocoLattes-TotalRecalls_94_RC-694_RS-833_RT-83',
      'CherryBosoms-HolyMels': 'tts_CherryBosoms-HolyMels_93_RC-625_RS-833_RT-75',
      'CupCakes-HolyMels': 'tts_CupCakes-HolyMels_92_RC-833_RS-833_RT-100',
      'CocoNaugthy-Hoots': 'tts_CocoNaugthy-Hoots_91_RC-833_RS-833_RT-100',
      'BooBerries-Perkies': 'tts_BooBerries-Perkies_90_RC-764_RS-1042_RT-73',
      'TataColadas-Perkies': 'tts_TataColadas-Perkies_89_RC-764_RS-1042_RT-73',
      'PurpleHush-Artemis': 'tts_PurpleHush-Artemis_88_RC-694_RS-1250_RT-56',
      'StarBust-Buffies': 'tts_StarBust-Buffies_87_RC-833_RS-625_RT-133',
      'PaPairmint-Artemis': 'tts_PaPairmint-Artemis_86_RC-694_RS-1250_RT-56',
      'BooBerries-HypnoTits': 'tts_BooBerries-HypnoTits_85_RC-764_RS-764_RT-100',
      'PurpleHush-HypnoTits': 'tts_PurpleHush-HypnoTits_84_RC-694_RS-764_RT-91',
      'StarBust-Trooper': 'tts_StarBust-Trooper_83_RC-833_RS-694_RT-120',
      'TataColadas-Shaggies': 'tts_TataColadas-Shaggies_82_RC-764_RS-694_RT-110',
      'TataColadas-TotalRecalls': 'tts_TataColadas-TotalRecalls_81_RC-764_RS-833_RT-92',
      'TataColadas-HolyMels': 'tts_TataColadas-HolyMels_80_RC-764_RS-833_RT-92',
      'WaterMelons-Trooper': 'tts_WaterMelons-Trooper_79_RC-764_RS-694_RT-110',
      'StarBust-Perkies': 'tts_StarBust-Perkies_78_RC-833_RS-1042_RT-80',
      'TataColadas-HypnoTits': 'tts_TataColadas-HypnoTits_77_RC-764_RS-764_RT-100',
      'TataColadas-Spades': 'tts_TataColadas-Spades_76_RC-764_RS-833_RT-92',
      'ChocoLattes-HypnoTits': 'tts_ChocoLattes-HypnoTits_75_RC-694_RS-764_RT-91',
      'ButterUdders-Shaggies': 'tts_ButterUdders-Shaggies_74_RC-833_RS-694_RT-120',
      'ButterUdders-Spades': 'tts_ButterUdders-Spades_73_RC-833_RS-833_RT-100',
      'BooBerries-Trooper': 'tts_BooBerries-Trooper_72_RC-764_RS-694_RT-110',
      'ButterUdders-Hoots': 'tts_ButterUdders-Hoots_71_RC-833_RS-833_RT-100',
      'WaterMelons-Vintties': 'tts_WaterMelons-Vintties_70_RC-764_RS-764_RT-100',
      'TataColadas-Vintties': 'tts_TataColadas-Vintties_69_RC-764_RS-764_RT-100',
      'WaterMelons-HolyMels': 'tts_WaterMelons-HolyMels_68_RC-764_RS-833_RT-92',
      'StarBust-OhBuoys': 'tts_StarBust-OhBuoys_67_RC-833_RS-833_RT-100',
      'PurpleHush-Perkies': 'tts_PurpleHush-Perkies_66_RC-694_RS-1042_RT-67',
      'CherryBosoms-Shaggies': 'tts_CherryBosoms-Shaggies_65_RC-625_RS-694_RT-90',
      'RackBerries-Shaggies': 'tts_RackBerries-Shaggies_64_RC-278_RS-694_RT-40',
      'LimeJellies-Artemis': 'tts_LimeJellies-Artemis_63_RC-139_RS-1250_RT-11',
      'RackBerries-Perkies': 'tts_RackBerries-Perkies_62_RC-278_RS-1042_RT-27',
      'RackBerries-Artemis': 'tts_RackBerries-Artemis_61_RC-278_RS-1250_RT-22',
      'ChocoLattes-Trooper': 'tts_ChocoLattes-Trooper_60_RC-694_RS-694_RT-100',
      'BrasBerries-Perkies': 'tts_BrasBerries-Perkies_59_RC-139_RS-1042_RT-13',
      'BrasBerries-Artemis': 'tts_BrasBerries-Artemis_58_RC-139_RS-1250_RT-11',
      'PassionFronts-Artemis': 'tts_PassionFronts-Artemis_57_RC-69_RS-1250_RT-6',
      'LimeJellies-Perkies': 'tts_LimeJellies-Perkies_56_RC-139_RS-1042_RT-13',
      'RackBerries-Buffies': 'tts_RackBerries-Buffies_55_RC-278_RS-625_RT-44',
      'CherryBosoms-Perkies': 'tts_CherryBosoms-Perkies_54_RC-625_RS-1042_RT-60',
      'GreenFairies-Artemis': 'tts_GreenFairies-Artemis_53_RC-69_RS-1250_RT-6',
      'ButterUdders-Buffies': 'tts_ButterUdders-Buffies_52_RC-833_RS-625_RT-133',
      'ChocoLattes-Perkies': 'tts_ChocoLattes-Perkies_51_RC-694_RS-1042_RT-67',
      'GreenTeatea-Artemis': 'tts_GreenTeatea-Artemis_50_RC-139_RS-1250_RT-11',
      'WaterMelons-Artemis': 'tts_WaterMelons-Artemis_49_RC-764_RS-1250_RT-61',
      'ButterUdders-Artemis': 'tts_ButterUdders-Artemis_48_RC-833_RS-1250_RT-67',
      'ChocoLattes-Artemis': 'tts_ChocoLattes-Artemis_47_RC-694_RS-1250_RT-56',
      'GreenTeatea-Trooper': 'tts_GreenTeatea-Trooper_46_RC-139_RS-694_RT-20',
      'PaPairmint-TotalRecalls': 'tts_PaPairmint-TotalRecalls_45_RC-694_RS-833_RT-83',
      'WaterMelons-HypnoTits': 'tts_WaterMelons-HypnoTits_44_RC-764_RS-764_RT-100',
      'WaterMelons-Perkies': 'tts_WaterMelons-Perkies_43_RC-764_RS-1042_RT-73',
      'CocoNaugthy-Vintties': 'tts_CocoNaugthy-Vintties_42_RC-833_RS-764_RT-109',
      'PeCans-HolyMels': 'tts_PeCans-HolyMels_41_RC-694_RS-833_RT-83',
      'WaterMelons-Shaggies': 'tts_WaterMelons-Shaggies_40_RC-764_RS-694_RT-110',
      'PaPairmint-OhBuoys': 'tts_PaPairmint-OhBuoys_39_RC-694_RS-833_RT-83',
      'PeCans-TotalRecalls': 'tts_PeCans-TotalRecalls_38_RC-694_RS-833_RT-83',
      'PeCans-Artemis': 'tts_PeCans-Artemis_37_RC-694_RS-1250_RT-56',
      'CocoNaugthy-HolyMels': 'tts_CocoNaugthy-HolyMels_36_RC-833_RS-833_RT-100',
      'CupCakes-Spades': 'tts_CupCakes-Spades_35_RC-833_RS-833_RT-100',
      'TataColadas-Buffies': 'tts_TataColadas-Buffies_34_RC-764_RS-625_RT-122',
      'PaPairmint-HolyMels': 'tts_PaPairmint-HolyMels_33_RC-694_RS-833_RT-83',
      'PeCans-Vintties': 'tts_PeCans-Vintties_32_RC-694_RS-764_RT-91',
      'CupCakes-OhBuoys': 'tts_CupCakes-OhBuoys_31_RC-833_RS-833_RT-100',
      'CherryBosoms-Hoots': 'tts_CherryBosoms-Hoots_30_RC-625_RS-833_RT-75',
      'CherryBosoms-Buffies': 'tts_CherryBosoms-Buffies_29_RC-625_RS-625_RT-100',
      'ChocoLattes-Buffies': 'tts_ChocoLattes-Buffies_28_RC-694_RS-625_RT-111',
      'BooBerries-OhBuoys': 'tts_BooBerries-OhBuoys_27_RC-764_RS-833_RT-92',
      'CherryBosoms-Trooper': 'tts_CherryBosoms-Trooper_26_RC-625_RS-694_RT-90',
      'PaPairmint-HypnoTits': 'tts_PaPairmint-HypnoTits_25_RC-694_RS-764_RT-91',
      'ButterUdders-Trooper': 'tts_ButterUdders-Trooper_24_RC-833_RS-694_RT-120',
      'PeCans-Trooper': 'tts_PeCans-Trooper_23_RC-694_RS-694_RT-100',
      'PeCans-HypnoTits': 'tts_PeCans-HypnoTits_22_RC-694_RS-764_RT-91',
      'TataColadas-OhBuoys': 'tts_TataColadas-OhBuoys_21_RC-764_RS-833_RT-92',
      'CherryBosoms-Spades': 'tts_CherryBosoms-Spades_20_RC-625_RS-833_RT-75',
      'ButterUdders-Perkies': 'tts_ButterUdders-Perkies_19_RC-833_RS-1042_RT-80',
      'ButterUdders-TotalRecalls': 'tts_ButterUdders-TotalRecalls_18_RC-833_RS-833_RT-100',
      'CherryBosoms-Artemis': 'tts_CherryBosoms-Artemis_17_RC-69_RS-1250_RT-6',
      'PeCans-OhBuoys': 'tts_PeCans-OhBuoys_16_RC-694_RS-833_RT-83',
      'CupCakes-Artemis': 'tts_CupCakes-Artemis_15_RC-833_RS-1250_RT-67',
      'ButterUdders-HypnoTits': 'tts_ButterUdders-HypnoTits_14_RC-833_RS-764_RT-109',
      'CocoNaugthy-Spades': 'tts_CocoNaugthy-Spades_13_RC-833_RS-833_RT-100',
      'CocoNaugthy-Buffies': 'tts_CocoNaugthy-Buffies_12_RC-833_RS-625_RT-133',
      'ChocoLattes-Spades': 'tts_ChocoLattes-Spades_11_RC-694_RS-833_RT-83',
      'CherryBosoms-OhBuoys': 'tts_CherryBosoms-OhBuoys_10_RC-625_RS-833_RT-75',
      'ButterUdders-OhBuoys': 'tts_ButterUdders-OhBuoys_9_RC-833_RS-833_RT-100',
      'BooBerries-Hoots': 'tts_BooBerries-Hoots_8_RC-764_RS-833_RT-92',
      'StarBust-Hoots': 'tts_StarBust-Hoots_7_RC-833_RS-833_RT-100',
      'CocoNaugthy-Shaggies': 'tts_CocoNaugthy-Shaggies_6_RC-833_RS-694_RT-120',
      'CocoNaugthy-OhBuoys': 'tts_CocoNaugthy-OhBuoys_5_RC-833_RS-833_RT-100',
      'CocoNaugthy-TotalRecalls': 'tts_CocoNaugthy-TotalRecalls_4_RC-833_RS-833_RT-100',
      'CocoNaugthy-Artemis': 'tts_CocoNaugthy-Artemis_3_RC-833_RS-1250_RT-67',
      'ChocoLattes-OhBuoys': 'tts_ChocoLattes-OhBuoys_2_RC-69_RS-833_RT-8',
      'CocoNaugthy-Trooper': 'tts_CocoNaugthy-Trooper_1_RC-833_RS-694_RT-120'
    };

    /* for (var oldKey in mapping) {
        var { name, result} = getSymbolData(oldKey);
        newMapping[name] = result;
    } */
 
    var doc = app.activeDocument;
    var symbols = doc.symbols;

    for (var i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        var symbolName = symbol.name;
        var tttieName = getNameAndColor(symbolName);
        log('Simple name: ' + tttieName);
        var newSymbolName = newMapping[tttieName];
        if (newSymbolName) {
          try {
            symbol.name = newSymbolName;
          } catch (e) {
            log(e + ' for ' + newSymbolName);
          }
        } else {
          log('No mapping found for ' + symbolName);
          continue;
        }
    } 

  
    
    //return newMapping;
  }

  /* function getSymbolData(inputString) {
    // Extract the name of the substring
    const nameRegex = /[^_]+_([\w-]+)-\d+_\{/;
    const nameMatch = inputString.match(nameRegex);
    const name = nameMatch ? nameMatch[1] : null;

    // Extract the values as an object
    const valuesRegex = /{([\w\d:.,]+)}/;
    const valuesMatch = inputString.match(valuesRegex);
    const valuesString = valuesMatch ? valuesMatch[1] : null;

    let values = '';
    if (valuesString) {
      const pairs = valuesString.split(",");
      pairs.forEach(pair => {
        const [key, value] = pair.split(":");
        values += `${key}-${(parseFloat(value) * 100).toFixed(0)}_`;
      });
      values = values.slice(0, -1); // Remove trailing underscore
    }

    const trailingRegex = /-\d+_/;
    const trailingMatch = inputString.match(trailingRegex);
    console.log(trailingMatch);
    const trailingNumber = trailingMatch ? parseInt(trailingMatch[0].slice(1, -1)) : null;

    var result = 'tts_' + name + '_' + trailingNumber + '_' + values;

    return {name, result};

  } */

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

  function getNameAndColor(inputString) {
    var nameRegex = /tts_([\w-]+)-\d+_/;
    var nameMatch = inputString.match(nameRegex);
    var name = nameMatch ? nameMatch[1] : null;

    return name;

  }

  function log(message) {
    var logFile = new File(Folder.desktop + "/titties_log.txt");
    logFile.open("a");
    logFile.writeln(new Date().toLocaleString() + ": " + message);
    logFile.close();
  }
  
  var cleanedMapping = cleanMapping();

  //console.log(cleanedMapping);