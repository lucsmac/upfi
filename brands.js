// script que não tem nada a ver com o desafio, foi uma ajudinha pra meu parceiro Rodolfo designer
(() => {
  const brands = [
    {
      optgroupLabel: 'Marcas mais populares',
      options: [
        {
          label: 'Renault (6213)',
          value: 'renault',
          metadata: { value_key: '4051' },
        },
        { label: 'BMW (5218)', value: 'bmw', metadata: { value_key: '4009' } },
        {
          label: 'Mercedes-Benz (5208)',
          value: 'mercedes-benz',
          metadata: { value_key: '4039' },
        },
        {
          label: 'Peugeot (3620)',
          value: 'peugeot',
          metadata: { value_key: '4046' },
        },
        { label: 'VW (2959)', value: 'vw', metadata: { value_key: '4069' } },
        {
          label: 'Opel (2455)',
          value: 'opel',
          metadata: { value_key: '4045' },
        },
        {
          label: 'SEAT (2338)',
          value: 'seat',
          metadata: { value_key: '4055' },
        },
        {
          label: 'Fiat (2316)',
          value: 'fiat',
          metadata: { value_key: '4019' },
        },
        {
          label: 'Audi (2312)',
          value: 'audi',
          metadata: { value_key: '4005' },
        },
        {
          label: 'Citroën (2197)',
          value: 'citroen',
          metadata: { value_key: '4012' },
        },
      ],
      enableDividerBottom: true,
    },
    {
      label: 'Abarth (101)',
      value: 'abarth',
      metadata: { value_key: '55820' },
    },
    { label: 'Aixam (16)', value: 'aixam', metadata: { value_key: '56727' } },
    {
      label: 'Alfa Romeo (439)',
      value: 'alfa-romeo',
      metadata: { value_key: '4002' },
    },
    { label: 'Alpina (1)', value: 'alpina', metadata: { value_key: '111523' } },
    { label: 'Alpine (2)', value: 'alpine', metadata: { value_key: '57057' } },
    {
      label: 'Aston Martin (26)',
      value: 'aston-martin',
      metadata: { value_key: '4004' },
    },
    { label: 'Audi (2312)', value: 'audi', metadata: { value_key: '4005' } },
    { label: 'Austin (4)', value: 'austin', metadata: { value_key: '111060' } },
    {
      label: 'Austin Healey (7)',
      value: 'austin-healey',
      metadata: { value_key: '56748' },
    },
    {
      label: 'Autobianchi (1)',
      value: 'autobianchi',
      metadata: { value_key: '111286' },
    },
    {
      label: 'Bellier (0)',
      value: 'bellier',
      metadata: { value_key: '56799' },
    },
    {
      label: 'Bentley (33)',
      value: 'bentley',
      metadata: { value_key: '4008' },
    },
    { label: 'BMW (5218)', value: 'bmw', metadata: { value_key: '4009' } },
    {
      label: 'Cadillac (8)',
      value: 'cadillac',
      metadata: { value_key: '56806' },
    },
    {
      label: 'Casalini (0)',
      value: 'casalini',
      metadata: { value_key: '111486' },
    },
    {
      label: 'Caterham (0)',
      value: 'caterham',
      metadata: { value_key: '111371' },
    },
    {
      label: 'Chatenet (1)',
      value: 'chatenet',
      metadata: { value_key: '56793' },
    },
    {
      label: 'Chevrolet (183)',
      value: 'chevrolet',
      metadata: { value_key: '4013' },
    },
    {
      label: 'Chrysler (34)',
      value: 'chrysler',
      metadata: { value_key: '4011' },
    },
    {
      label: 'Citroën (2197)',
      value: 'citroen',
      metadata: { value_key: '4012' },
    },
    { label: 'Cupra (1)', value: 'cupra', metadata: { value_key: '56925' } },
    { label: 'Dacia (247)', value: 'dacia', metadata: { value_key: '4070' } },
    { label: 'Daewoo (9)', value: 'daewoo', metadata: { value_key: '4014' } },
    {
      label: 'Daihatsu (5)',
      value: 'daihatsu',
      metadata: { value_key: '4015' },
    },
    { label: 'Datsun (4)', value: 'datsun', metadata: { value_key: '55726' } },
    { label: 'Dodge (38)', value: 'dodge', metadata: { value_key: '4017' } },
    { label: 'DS (99)', value: 'ds', metadata: { value_key: '4071' } },
    {
      label: 'Ferrari (50)',
      value: 'ferrari',
      metadata: { value_key: '4018' },
    },
    { label: 'Fiat (2316)', value: 'fiat', metadata: { value_key: '4019' } },
    { label: 'Fisker (1)', value: 'fisker', metadata: { value_key: '56760' } },
    { label: 'Ford (1898)', value: 'ford', metadata: { value_key: '4020' } },
    { label: 'GMC (1)', value: 'gmc', metadata: { value_key: '4021' } },
    { label: 'Honda (393)', value: 'honda', metadata: { value_key: '4022' } },
    { label: 'Hummer (15)', value: 'hummer', metadata: { value_key: '4023' } },
    {
      label: 'Hyundai (709)',
      value: 'hyundai',
      metadata: { value_key: '4024' },
    },
    {
      label: 'Infiniti (6)',
      value: 'infiniti',
      metadata: { value_key: '56786' },
    },
    { label: 'Isuzu (7)', value: 'isuzu', metadata: { value_key: '4026' } },
    { label: 'Jaguar (309)', value: 'jaguar', metadata: { value_key: '4027' } },
    { label: 'Jeep (235)', value: 'jeep', metadata: { value_key: '4028' } },
    {
      label: 'Jiayuan (0)',
      value: 'jiayuan',
      metadata: { value_key: '57093' },
    },
    { label: 'Kaiser (2)', value: 'kaiser', metadata: { value_key: '111614' } },
    { label: 'Kia (546)', value: 'kia', metadata: { value_key: '4029' } },
    { label: 'Lada (1)', value: 'lada', metadata: { value_key: '4030' } },
    {
      label: 'Lamborghini (13)',
      value: 'lamborghini',
      metadata: { value_key: '4031' },
    },
    { label: 'Lancia (76)', value: 'lancia', metadata: { value_key: '4032' } },
    {
      label: 'Land Rover (301)',
      value: 'land-rover',
      metadata: { value_key: '4033' },
    },
    { label: 'Lexus (183)', value: 'lexus', metadata: { value_key: '4034' } },
    { label: 'Ligier (6)', value: 'ligier', metadata: { value_key: '56430' } },
    { label: 'Lotus (9)', value: 'lotus', metadata: { value_key: '4036' } },
    { label: 'Man (0)', value: 'man', metadata: { value_key: '111111' } },
    {
      label: 'Maserati (27)',
      value: 'maserati',
      metadata: { value_key: '4037' },
    },
    {
      label: 'Maybach (1)',
      value: 'maybach',
      metadata: { value_key: '56755' },
    },
    { label: 'Mazda (435)', value: 'mazda', metadata: { value_key: '4038' } },
    {
      label: 'McLaren (5)',
      value: 'mclaren',
      metadata: { value_key: '56868' },
    },
    {
      label: 'Mercedes-Benz (5208)',
      value: 'mercedes-benz',
      metadata: { value_key: '4039' },
    },
    { label: 'MG (31)', value: 'mg', metadata: { value_key: '4040' } },
    {
      label: 'Microcar (4)',
      value: 'microcar',
      metadata: { value_key: '56394' },
    },
    { label: 'MINI (1038)', value: 'mini', metadata: { value_key: '4041' } },
    {
      label: 'Mitsubishi (531)',
      value: 'mitsubishi',
      metadata: { value_key: '4042' },
    },
    { label: 'Morgan (4)', value: 'morgan', metadata: { value_key: '56310' } },
    {
      label: 'Morris (5)',
      value: 'austin-morris',
      metadata: { value_key: '4006' },
    },
    { label: 'Nash (1)', value: 'nash', metadata: { value_key: '111058' } },
    {
      label: 'Nissan (1389)',
      value: 'nissan',
      metadata: { value_key: '4044' },
    },
    { label: 'Opel (2455)', value: 'opel', metadata: { value_key: '4045' } },
    {
      label: 'Outra não listada (20)',
      value: 'outra-nao-listada',
      metadata: { value_key: '4200' },
    },
    {
      label: 'Peugeot (3620)',
      value: 'peugeot',
      metadata: { value_key: '4046' },
    },
    {
      label: 'Polestar (0)',
      value: 'polestar',
      metadata: { value_key: '111070' },
    },
    {
      label: 'Pontiac (2)',
      value: 'pontiac',
      metadata: { value_key: '57101' },
    },
    {
      label: 'Porsche (650)',
      value: 'porsche',
      metadata: { value_key: '4048' },
    },
    {
      label: 'Renault (6213)',
      value: 'renault',
      metadata: { value_key: '4051' },
    },
    {
      label: 'Rolls Royce (10)',
      value: 'rolls-royce',
      metadata: { value_key: '4052' },
    },
    { label: 'Rover (28)', value: 'rover', metadata: { value_key: '4053' } },
    { label: 'Saab (25)', value: 'saab', metadata: { value_key: '4054' } },
    { label: 'SEAT (2338)', value: 'seat', metadata: { value_key: '4055' } },
    { label: 'Shelby (0)', value: 'shelby', metadata: { value_key: '111405' } },
    { label: 'Skoda (435)', value: 'skoda', metadata: { value_key: '4056' } },
    { label: 'Smart (902)', value: 'smart', metadata: { value_key: '4057' } },
    {
      label: 'SsangYong (5)',
      value: 'ssangyong',
      metadata: { value_key: '4058' },
    },
    { label: 'Subaru (17)', value: 'subaru', metadata: { value_key: '4059' } },
    { label: 'Suzuki (94)', value: 'suzuki', metadata: { value_key: '4060' } },
    { label: 'Tata (0)', value: 'tata', metadata: { value_key: '4062' } },
    { label: 'Tesla (87)', value: 'tesla', metadata: { value_key: '4203' } },
    {
      label: 'Toyota (1581)',
      value: 'toyota',
      metadata: { value_key: '4063' },
    },
    {
      label: 'Triumph (14)',
      value: 'triumph',
      metadata: { value_key: '56095' },
    },
    { label: 'UMM (3)', value: 'umm', metadata: { value_key: '4066' } },
    {
      label: 'Vauxhall (0)',
      value: 'vauxhall',
      metadata: { value_key: '4067' },
    },
    { label: 'Volvo (1287)', value: 'volvo', metadata: { value_key: '4068' } },
    { label: 'VW (2959)', value: 'vw', metadata: { value_key: '4069' } },
  ];

  const firstBrands = brands[0].options.map(brand => {
    return brand.label.split(' (')[0];
  });
  const labels = brands
    .filter((brand, index) => index !== 0)
    .map(brand => {
      return brand.label.split(' (')[0];
    });

  const allBrands = firstBrands.concat(labels);
  const formattedBrands = allBrands.join('\n');

  console.log('allBrands: ', allBrands);
  console.log('formattedBrands: ', formattedBrands);
})();
