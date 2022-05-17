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
        ],/* <--- SubSectors End */
      },
      {
        name: 'Deck',
        id: 'bathroom_sector',
        imageClass: 'bg-bathroom-1',
        subSectors: [
          {
              name: "Shower Walls & Interior",
              id: 'shower_walls_and_interior_sub',
              narrower:[
                {
                    sub_cat: 'shower_walls_and_interior_sub',
                    question: 'What is the primary type of material is the shower is constructed with?',
                    user_input_id:'bathroom_shower_material_1',
                    answers: [
                        'marble',
                        'plastic',
                        'stone',
                        'wood',
                        'tile',
                    ]
                },
                {
                    sub_cat: 'shower_walls_and_interior_sub',
                    question: 'What is the Secondary type of material is the shower is constructed with?',
                    user_input_id:'bathroom_shower_material_2',
                    answers: [
                        'marble',
                        'plastic',
                        'stone',
                        'wood',
                        'tile',
                    ]
                },
                {
                    sub_cat: 'shower_walls_and_interior_sub',
                    question: 'Describe any significant damage to the shower',
                    user_input_id:'bathroom_shower_damage',
                    answers: [
                        'single crack',
                        'multiple cracks',
                        'shattering',
                        'broken piece',
                        'many broken pieces',
                    ]
                },
              ],
        },
        {
              name: "Shower Head & Knobs",
              id: "shower_head_and_knobs_sub",
              narrower:[
                {
                    sub_cat: "shower_head_and_knobs_sub",
                    question: 'Is the Shower turning on?',
                    user_input_id:'is_bathroom_shower_on',
                    answers: [
                        'Yes it is turning on',
                        'No it isn\'t turning on',
                        'It is sometimes turning on'
                    ]
                },
                {
                    sub_cat: "shower_head_and_knobs_sub",
                    question: 'Tell me about the temperature?',
                    user_input_id:'bathroom_shower_temperature',
                    answers: [
                        'To Hot',
                        'To Cold',
                        'To Hot Sometimes',
                        'To Cold Sometimes'
                    ]
                },
                {
                    sub_cat: "shower_head_and_knobs_sub",
                    question: 'Tell me about the water pressure?',
                    user_input_id:'bathroom_shower_water_pressure',
                    answers: [
                        'Water flow to fast',
                        'Water flow to slow',
                        'Water flow inconsistent',
                        'Water flowing from incorrect area'
                    ]
                },
                {
                    sub_cat: "shower_head_and_knobs_sub",
                    question: 'What Brand is the shower head?',
                    user_input_id:'bathroom_shower_head_brand',
                    answers: [
                       'INPUT'
                    ]
                },
              ],
          },
          {
            name: "Sink",
            id: "bathroom_sink_sub",
            narrower:[
              {
                    sub_cat: "bathroom_sink_sub",
                    question: 'Is the Water flowing?',
                    user_input_id:'bathroom_sink_water_flowing',
                    answers: [
                        'Yes',
                        'No',
                        'Sometimes'
                    ]
              },
              {
                    sub_cat: "bathroom_sink_sub",
                    question: 'How is the water flowing?',
                    user_input_id:'bathroom_sink_water_pressure',
                    answers: [
                        'Too Fast',
                        'Too Slow',
                        'Erratic'
                    ]
              },
              {
                    sub_cat: "bathroom_sink_sub",
                    question: 'Is the water flowing out of the proper spot?',
                    user_input_id:'bathroom_sink_water_flow_location',
                    answers: [
                        'Partially the correct location',
                        'Completely incorrect location',
                        'Erratic'
                    ]
              },
            ],
        },  
        ],/* <--- SubSectors End */
      },
    
    ],/* <--- Sectors End */
  };