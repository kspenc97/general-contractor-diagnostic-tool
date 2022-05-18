export const OUTDOOR_SECTORS = {
    //name: 'Company',
    sectors: [
      {
        name: 'Garage',
        id: 'garage_sector',
        imageClass: 'bg-garage-1',
        subSectors: [
          {
              name: "Garage Door",
              id: "garage_door_sub",
              narrower:[
                {
                    sub_cat: "garage_door_sub",
                    question: 'Is the garage door opening?',
                    user_input_id:'garage_door_opening',
                    answers: [
                        'Yes it is opening',
                        'No it isn\'t opening',
                        'It is opening halfway then sticking',
                        'It is opening halfway then closing again',
                        'It is opening all the way and Immediatly staying closed',
                        'It is opening all the way then closing again after a period of time'
                    ]
                },
                {
                    sub_cat: "garage_door_sub",
                    question: 'Is there any visible damage to the  track?',
                    user_input_id:'garage_door_track_general',
                    answers: [
                        'The slider is off the track',
                        'The track is bent',
                        'The slider is making a screeching noise then stopping on the track',
                        'The track punctured the ceiling',
                    ]
                },
                {
                    sub_cat: "garage_door_sub",
                    question: 'Describe any noise the slider is making as it moves along the track (i.e. screeching, grinding, scraping)',
                    user_input_id:'garage_slider_noise_description',
                    answers: [
                        'INPUT'
                    ]
                },
                {
                    sub_cat: "garage_door_sub",
                    question: 'Describe any noise the motor is making (i.e. screeching, grinding, scraping)',
                    user_input_id:'garage_motor_noise_description',
                    answers: [
                        'INPUT'
                    ]
                },
                {
                    sub_cat: "garage_door_sub",
                    question: 'Type in any brand name visible on the motor',
                    user_input_id:'garage_motor_brand',
                    answers: [
                        'INPUT'
                    ]
                },
              ],
          },
          {
            name: 'Garage Walls',
            id: 'garage_walls_sub',
            narrower:[
              {
                    sub_cat: 'garage_walls_sub',
                    question: 'Is there a hole in the garage walls?',
                    user_input_id:'garage_walls_sub_holes',
                    answers: [
                        'One',
                        'Multiple',
                        'Larger hole then a fist size',
                    ]
              },
              {
                sub_cat: 'garage_walls_sub',
                question: 'What material are the garage walls constructed with?',
                user_input_id:'garage_walls_sub_material-1',
                answers: [
                    'drywall',
                    'wood',
                    'vinyl',
                    'stone',
                    'plastic',
                    'brick',
                ]
              },
              {
                sub_cat: 'garage_walls_sub',
                question: 'What secondary material are the garage walls constructed with?',
                user_input_id:'garage_walls_sub_material-2',
                answers: [
                    'drywall',
                    'wood',
                    'vinyl',
                    'stone',
                    'plastic',
                    'brick',
                ]
              },
              {
                sub_cat: 'garage_walls_sub',
                question: 'What you can you see through the hole in the wall?',
                user_input_id:'garage_walls_inner_wall_1',
                answers: [
                    'electrical wires',
                    'the next room',
                    'home insulation',
                    'brick',
                    'wood',
                    'water/flowing water'
                ]
              },
              {
                sub_cat: 'garage_walls_sub',
                question: 'What else you can you see through the hole in the wall?',
                user_input_id:'garage_walls_inner_wall_2',
                answers: [
                    'electrical wires',
                    'the next room',
                    'home insulation',
                    'brick',
                    'wood',
                    'water/flowing water'
                ]
              },
            ],
          },
          {
            name: 'Garage Ceiling',
            id: 'garage_ceiling_sub',
            narrower:[
              {
                    sub_cat: 'garage_ceiling_sub',
                    question: 'Is there a hole in the garage ceiling?',
                    user_input_id:'garage_ceiling_sub_holes',
                    answers: [
                        'One',
                        'Multiple',
                        'Larger hole then a fist size',
                    ]
              },
              {
                sub_cat: 'garage_ceiling_sub',
                question: 'What material is the garage ceiling constructed with?',
                user_input_id:'garage_ceiling_sub_material-1',
                answers: [
                    'drywall',
                    'wood',
                    'vinyl',
                    'stone',
                    'plastic',
                    'brick',
                ]
              },
              {
                sub_cat: 'garage_ceiling_sub',
                question: 'What secondary material is the garage ceiling constructed with?',
                user_input_id:'garage_ceiling_sub_material-2',
                answers: [
                    'drywall',
                    'wood',
                    'vinyl',
                    'stone',
                    'plastic',
                    'brick',
                ]
              },
              {
                sub_cat: 'garage_ceiling_sub',
                question: 'What you can you see through the hole in the garage ceiling?',
                user_input_id:'garage_ceiling_inner_wall_1',
                answers: [
                    'electrical wires',
                    'the next room',
                    'home insulation',
                    'brick',
                    'wood',
                    'water/flowing water'
                ]
              },
              {
                sub_cat: 'garage_ceiling_sub',
                question: 'What else you can you see through the hole in the garage ceiling?',
                user_input_id:'garage_ceiling_inner_wall_2',
                answers: [
                    'electrical wires',
                    'the next room',
                    'home insulation',
                    'brick',
                    'wood',
                    'water/flowing water'
                ]
              },
            ],
          },
        ],/* <--- SubSectors End */
      },
      {
        name: 'Deck',
        id: 'deck_sector',
        imageClass: 'bg-deck-1',
        subSectors: [
          {
              name: "Deck Construction",
              id: 'deck_construction_sub',
              narrower:[
                {
                    sub_cat: 'deck_construction_sub',
                    question: 'What is the primary material is the deck constructed with?',
                    user_input_id:'deck_construction_material_1',
                    answers: [
                        'wood',
                        'plastic',
                        'metal',
                    ]
                },
                {
                    sub_cat: 'deck_construction_sub',
                    question: 'What is the secondary material is the deck constructed with?',
                    user_input_id:'deck_construction_material_2',
                    answers: [
                        'wood',
                        'plastic',
                        'metal',
                    ]
                },
                {
                    sub_cat: 'deck_construction_sub',
                    question: 'Describe any visible damage to the deck',
                    user_input_id:'deck_construction_damage_1',
                    answers: [
                        'cracked materials',
                        'material has fallen off the deck',
                        'handrails are loose',
                        'handrails have fallen off',
                        'stairs are loose',
                        'beams are broken in various places'
                    ]
                },
                {
                    sub_cat: 'deck_construction_sub',
                    question: 'Describe any other visible damage to the deck',
                    user_input_id:'deck_construction_damage_2',
                    answers: [
                        'cracked materials',
                        'material has fallen off the deck',
                        'handrails are loose',
                        'handrails have fallen off',
                        'stairs are loose',
                        'beams are broken in various places'
                    ]
                },
              ],
        },
        {
            name: "Deck Wall attachment",
            id: 'deck_wall_sub',
            narrower:[
              {
                  sub_cat: 'deck_wall_sub',
                  question: 'How is the deck attached to the wall?',
                  user_input_id:'deck_wall_attachment_1',
                  answers: [
                      'wood is hammered into wall',
                      'metal connectors wrapped around wood',
                      'beams are slid into wall cutouts',
                  ]
              },
              {
                sub_cat: 'deck_wall_sub',
                question: 'Is there any visible damage near the attachments',
                user_input_id:'deck_wall_damage_1',
                answers: [
                    'beams are falling out of attachments on the wall',
                    'a section of the deck along the wall is buckeling',
                    'the wall is rotting/damaged where the deck is connected to it',
                ]
              },
              {
                sub_cat: 'deck_wall_sub',
                question: 'Is there any other damage near the attachments',
                user_input_id:'deck_wall_damage_2',
                answers: [
                    'beams are falling out of attachments on the wall',
                    'a section of the deck along the wall is buckeling',
                    'the wall is rotting/damaged where the deck is connected to it',
                ]
              },
            ],
      },
        ],/* <--- SubSectors End */
      },
      {
        name: 'Fence',
        id: 'fence_sector',
        imageClass: 'bg-fence-1',
        subSectors: [
          {
              name: "Fence Construction",
              id: 'fence_construction_sub',
              narrower:[
                {
                    sub_cat: 'fence_construction_sub',
                    question: 'What is the primary material is the fence constructed with?',
                    user_input_id:'fence_construction_material_1',
                    answers: [
                        'wood',
                        'plastic',
                        'metal',
                        'brick',
                    ]
                },
                {
                    sub_cat: 'fence_construction_sub',
                    question: 'What is the secondary material is the fence constructed with?',
                    user_input_id:'fence_construction_material_2',
                    answers: [
                        'wood',
                        'plastic',
                        'metal',
                        'brick',
                    ]
                },
                {
                    sub_cat: 'fence_construction_sub',
                    question: 'Describe any visible damage to the fence',
                    user_input_id:'fence_construction_damage_1',
                    answers: [
                        'fence beams are not attached to the ground properly',
                        'pieces have fallen off the fence',
                        'a section of the fence has fallen over',
                        'something else is interfering with the fence e.x. tree branch fell on fence',
                        'light fixtures on the fence are broken',
                    ]
                },
                {
                    sub_cat: 'fence_construction_sub',
                    question: 'Describe any other visible damage to the fence',
                    user_input_id:'fence_construction_damage_2',
                    answers: [
                        'fence beams are not attached to the ground properly',
                        'pieces have fallen off the fence',
                        'a section of the fence has fallen over',
                        'something else is interfering with the fence e.x. tree branch fell on fence',
                        'light fixtures on the fence are broken',
                    ]
                },
              ],
        },
        {
            name: "Fence Gate",
            id: 'fence_gate_sub',
            narrower:[
              {
                  sub_cat: 'fence_gate_sub',
                  question: 'Is the gate opening?',
                  user_input_id:'fence_gate_action',
                  answers: [
                      'opening halfway then sticking',
                      'gate stuck closed',
                      'cannot open lock on gate',
                  ]
              },
              {
                sub_cat: 'fence_gate_sub',
                question: 'Is the gate automatic?',
                user_input_id:'fence_gate_power',
                answers: [
                    'Yes, the gate is powered by electricity',
                    'Yes, the gate opens using a crank',
                    'No, the gate is opened manually',
                ]
              },
              {
                sub_cat: 'fence_gate_sub',
                question: 'What is the primary material the gate is constructed with?',
                user_input_id:'fence_gate_construction_material_1',
                answers: [
                    'wood',
                    'plastic',
                    'metal',
                    'brick',
                ]
            },
            {
                sub_cat: 'fence_gate_sub',
                question: 'What is the secondary material the gate constructed with?',
                user_input_id:'fence_gate_construction_material_2',
                answers: [
                    'wood',
                    'plastic',
                    'metal',
                    'brick',
                ]
            },
            {
                sub_cat: 'fence_gate_sub',
                question: 'Describe any visible damage to the gate',
                user_input_id:'fence_gate_construction_damage_1',
                answers: [
                    'gate is not attached properly on the sides',
                    'pieces have fallen off the gate',
                    'the gate has fallen off it\'s mounting',
                    'something else is interfering with the gate e.x. tree branch fell on gate',
                    'light fixtures on the gate are broken',
                ]
            },
            {
                sub_cat: 'fence_gate_sub',
                question: 'Describe any other visible damage to the gate',
                user_input_id:'fence_gate_construction_damage_2',
                answers: [
                    'gate is not attached properly on the sides',
                    'pieces have fallen off the gate',
                    'the gate has fallen off it\'s mounting',
                    'something else is interfering with the gate e.x. tree branch fell on gate',
                    'light fixtures on the gate are broken',
                ]
            },
            ],
      },
        ],/* <--- SubSectors End */
      },
      {
        name: 'Driveway',
        id: 'driveway_sector',
        imageClass: 'bg-driveway-1',
        subSectors: [
          {
              name: "Driveway Construction",
              id: 'driveway_construction_sub',
              narrower:[
                {
                    sub_cat: 'driveway_construction_sub',
                    question: 'What is the primary material the driveway is constructed with?',
                    user_input_id:'driveway_construction_material_1',
                    answers: [
                        'brick',
                        'concrete',
                        'stone',
                        'turf',
                    ]
                },
                {
                    sub_cat: 'driveway_construction_sub',
                    question: 'What is the secondary material the driveway is constructed with?',
                    user_input_id:'driveway_construction_material_2',
                    answers: [
                        'brick',
                        'concrete',
                        'stone',
                        'turf',
                    ]
                },
                {
                    sub_cat: 'driveway_construction_sub',
                    question: 'Describe any damage to the driveway',
                    user_input_id:'driveway_damage_1',
                    answers: [
                        'single crack',
                        'multiple cracks',
                        'pieces missing',
                        'water coming from below driveway',
                    ]
                },
                {
                    sub_cat: 'driveway_construction_sub',
                    question: 'Describe any other damage to the driveway',
                    user_input_id:'driveway_damage_2',
                    answers: [
                        'single crack',
                        'multiple cracks',
                        'pieces missing',
                        'water coming from below driveway',
                    ]
                },
              ],
        },
        ],/* <--- SubSectors End */
      },
    ],/* <--- Sectors End */
  };