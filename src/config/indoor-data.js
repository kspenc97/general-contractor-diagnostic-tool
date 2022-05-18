export const INDOOR_SECTORS = {
    //name: 'Company',
    sectors: [
      {
        name: 'Kitchen',
        id: 'kitchen_sector',
        imageClass: 'bg-kitchen-1',
        subSectors: [
          {
              name: "Kitchen stove",
              id: "kitchen_stove_sub",
              narrower:[
                {
                    sub_cat: "kitchen_stove_sub",
                    question: 'Is the Stove turning on?',
                    user_input_id:'is_stove_on',
                    answers: [
                        'Yes it is turning on',
                        'No it isn\'t turning on',
                        'It is sometimes turning on'
                    ]
                },
                {
                    sub_cat: "kitchen_stove_sub",
                    question: 'Tell me about the temperature?',
                    user_input_id:'stove_temperature',
                    answers: [
                        'To Hot',
                        'To Cold',
                        'To Hot Sometimes',
                        'To Cold Sometimes'
                    ]
                },
                {
                    sub_cat: "kitchen_stove_sub",
                    question: 'Is the screen on?',
                    user_input_id:'screen_on_or_off',
                    answers: [
                        'Yes',
                        'No',
                    ]
                },
                {
                    sub_cat: "kitchen_stove_sub",
                    question: 'Enter any Screen error message below',
                    user_input_id:'stove_screen_error_message',
                    answers: [
                        'INPUT'
                    ]
                },
                {
                    sub_cat: "kitchen_stove_sub",
                    question: 'Enter the brand name of the stove here:',
                    user_input_id:'stove_brand_name',
                    answers: [
                        'INPUT'
                    ]
                },
              ],
          },
          {
            name: "Kitchen sink",
            id: 'kitchen_sink_sub',
            narrower:[
              {
                    sub_cat: "kitchen_sink_sub",
                    question: 'Is the Water flowing?',
                    user_input_id:'kitchen_sink_water_flowing',
                    answers: [
                        'Yes',
                        'No',
                        'Sometimes'
                    ]
              },
              {
                    sub_cat: "kitchen_sink_sub",
                    question: 'How is the water flowing?',
                    user_input_id:'kitchen_sink_water_pressure',
                    answers: [
                        'Too Fast',
                        'Too Slow',
                        'Erraticly'
                    ]
              },
              {
                sub_cat: "kitchen_sink_sub",
                question: 'Is the water flowing out of the proper spot?',
                user_input_id:'kitchen_sink_water_flow_location',
                answers: [
                    'Partially the correct location',
                    'Completely incorrect location',
                    'Erratic'
                ]
              },
            ],
          },
          {
            name: 'Kitchen Walls',
            id: 'kitchen_walls_sub',
            narrower:[
              {
                    sub_cat: 'kitchen_walls_sub',
                    question: 'Is there a hole in the kitchen walls?',
                    user_input_id:'kitchen_walls_sub_holes',
                    answers: [
                        'One',
                        'Multiple',
                        'Larger hole then a fist size',
                    ]
              },
              {
                sub_cat: 'kitchen_walls_sub',
                question: 'What material are the kitchen walls constructed with?',
                user_input_id:'kitchen_walls_sub_material-1',
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
                sub_cat: 'kitchen_walls_sub',
                question: 'What secondary material are the kitchen walls constructed with?',
                user_input_id:'kitchen_walls_sub_material-2',
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
                sub_cat: 'kitchen_walls_sub',
                question: 'What you can you see through the hole in the kitchen wall?',
                user_input_id:'kitchen_walls_inner_wall_1',
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
                sub_cat: 'kitchen_walls_sub',
                question: 'What else you can you see through the hole in the kitchen wall?',
                user_input_id:'kitchen_walls_inner_wall_2',
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
            name: 'Kitchen Ceiling',
            id: 'Kitchen_ceiling_sub',
            narrower:[
              {
                    sub_cat: 'kitchen_ceiling_sub',
                    question: 'Is there a hole in the kitchen ceiling?',
                    user_input_id:'kitchen_ceiling_sub_holes',
                    answers: [
                        'One',
                        'Multiple',
                        'Larger hole then a fist size',
                    ]
              },
              {
                sub_cat: 'kitchen_ceiling_sub',
                question: 'What material is the kitchen ceiling constructed with?',
                user_input_id:'kitchen_ceiling_sub_material-1',
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
                sub_cat: 'kitchen_ceiling_sub',
                question: 'What secondary material is the kitchen ceiling constructed with?',
                user_input_id:'kitchen_ceiling_sub_material-2',
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
                sub_cat: 'kitchen_ceiling_sub',
                question: 'What you can you see through the hole in the kitchen ceiling?',
                user_input_id:'kitchen_ceiling_inner_wall_1',
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
                sub_cat: 'kitchen_ceiling_sub',
                question: 'What else you can you see through the hole in the kitchen ceiling?',
                user_input_id:'kitchen_ceiling_inner_wall_2',
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
        name: 'Bathroom',
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
            name: "Bathroom Sink",
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
        {
            name: 'Bathroom Walls',
            id: 'bathroom_walls_sub',
            narrower:[
              {
                    sub_cat: 'bathroom_walls_sub',
                    question: 'Is there a hole in the bathoom walls?',
                    user_input_id:'bathroom_walls_sub_holes',
                    answers: [
                        'One',
                        'Multiple',
                        'Larger hole then a fist size',
                    ]
              },
              {
                sub_cat: 'bathroom_walls_sub',
                question: 'What material are the bathroom walls constructed with?',
                user_input_id:'bathroom_walls_sub_material-1',
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
                sub_cat: 'bathroom_walls_sub',
                question: 'What secondary material are the bathroom walls constructed with?',
                user_input_id:'bathroom_walls_sub_material-2',
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
                sub_cat: 'bathroom_walls_sub',
                question: 'What you can you see through the hole in the bathroom wall?',
                user_input_id:'bathroom_walls_inner_wall_1',
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
                sub_cat: 'bathroom_walls_sub',
                question: 'What else you can you see through the hole in the bathroom wall?',
                user_input_id:'bathroom_walls_inner_wall_2',
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
            name: 'Bathroom Ceiling',
            id: 'bathroom_ceiling_sub',
            narrower:[
              {
                    sub_cat: 'bathroom_ceiling_sub',
                    question: 'Is there a hole in the bathroom ceiling?',
                    user_input_id:'bathroom_ceiling_sub_holes',
                    answers: [
                        'One',
                        'Multiple',
                        'Larger hole then a fist size',
                    ]
              },
              {
                sub_cat: 'bathroom_ceiling_sub',
                question: 'What material is the bathroom ceiling constructed with?',
                user_input_id:'bathroom_ceiling_sub_material-1',
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
                sub_cat: 'bathroom_ceiling_sub',
                question: 'What secondary material is the bathroom ceiling constructed with?',
                user_input_id:'bathroom_ceiling_sub_material-2',
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
                sub_cat: 'bathroom_ceiling_sub',
                question: 'What you can you see through the hole in the backroom ceiling?',
                user_input_id:'bathroom_ceiling_inner_wall_1',
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
                sub_cat: 'bathroom_ceiling_sub',
                question: 'What else you can you see through the hole in the bathroom ceiling?',
                user_input_id:'bathroom_ceiling_inner_wall_2',
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
        name: 'HVAC',
        id: 'hvac_sector',
        imageClass: 'bg-hvac-1',
        subSectors: [
          {
              name: "HVAC system and control panel",
              id: 'hvac_system_and_control_sub',
              narrower:[
                {
                    sub_cat: 'hvac_system_and_control_sub',
                    question: 'Tell me about the functionality of the control device for the HVAC system',
                    user_input_id:'hvac_system_control_1',
                    answers: [
                        'device is turning on normally but the buttons don\'t seem to affect anything',
                        'device is not powering on',
                        'device is powering on and off repeatedly',
                        'device is turning on but displaying no data',
                    ]
                },
                {
                    sub_cat: 'hvac_system_and_control_sub',
                    question: 'Can you turn the heat & air conditioning off or on?',
                    user_input_id:'hvac_system_control_2',
                    answers: [
                        'Can\'t turn off heat',
                        'Can\'t turn off ac',
                        'Can\'t turn off heat and ac',
                        'Can\'t turn on heat',
                        'Can\'t turn on ac',
                        'Can\'t turn on heat and ac',
                    ]
                },
                {
                    sub_cat: 'hvac_system_and_control_sub',
                    question: 'Describe any noise the HVAC system is making',
                    user_input_id:'hvac_system_control_3',
                    answers: [
                        'grinding noises',
                        'banging noises',
                        'scraping noises',
                        'screaching noises',
                        'no noises'
                    ]
                },
                {
                    sub_cat: 'hvac_system_and_control_sub',
                    question: 'Type in any brand name & model on the HVAC control device',
                    user_input_id:'hvac_system_control_4',
                    answers: [
                        'INPUT'
                    ]
                },
                {
                    sub_cat: 'hvac_system_and_control_sub',
                    question: 'Type in any brand name & model on the HVAC system',
                    user_input_id:'hvac_system_control_5',
                    answers: [
                        'INPUT'
                    ]
                },
              ],
        },
        {
            name: "HVAC Ventiation",
            id: 'hvac_ventilation_sub',
            narrower:[
              {
                  sub_cat: 'hvac_ventilation_sub',
                  question: 'Desribe the temperature of the home',
                  user_input_id:'home_temperature_1',
                  answers: [
                      'too hot',
                      'too cold',
                      'inconsistent',
                    ]
              },
              {
                  sub_cat: 'hvac_ventilation_sub',
                  question: 'Is there airflow coming out of the vents?',
                  user_input_id:'home_temperature_2',
                  answers: [
                      'from all vents',
                      'from some vents',
                      'no airflow',
                      'excess airflow',
                  ]
                },
              ],
          },
        ],
         
      },/* <--- SubSectors End */
      /*  */
      {
        name: 'General',
        id: 'general_sector',
        imageClass: 'bg-general-1',
        subSectors: [
          {
              name: "Plumbing issues",
              id: 'plumbing_general_sub',
              narrower:[
                {
                    sub_cat: 'plumbing_general_sub',
                    question: 'Where is the leak located?',
                    user_input_id:'plumbing_general_1',
                    answers: [
                        'the wall',
                        'the floor',
                        'the ceiling',
                    ]
                },
                {
                    sub_cat: 'plumbing_general_sub',
                    question: 'Describe the flow of the liquid from the leak?',
                    user_input_id:'plumbing_general_2',
                    answers: [
                        'dripping inconsistently',
                        'dripping fast',
                        'flowing slow',
                        'flowing fast'
                    ]
                },
                {
                    sub_cat: 'plumbing_general_sub',
                    question: 'What type of liquid is leaking?',
                    user_input_id:'plumbing_general_3',
                    answers: [
                        'Water',
                        'Sewage',
                        'other',
                    ]
                },
              ],
        },
        {
            name: "Electrical issues",
            id: 'electrical_general_sub',
            narrower:[
              {
                  sub_cat: 'electrical_general_sub',
                  question: 'Is there an issue with outlets?',
                  user_input_id:'electrical_general_1',
                  answers: [
                      'Single outlet not working',
                      'Multiple outlets not working',
                  ]
              },
              {
                sub_cat: 'electrical_general_sub',
                question: 'Is there an issue with switches?',
                user_input_id:'electrical_general_2',
                answers: [
                    'Single Switch not working',
                    'Multiple switches not working',
                    'Single switch affecting incorrect spot',
                    'Multiple switches affecting incorrect spots'
                ]
              },
              {
                sub_cat: 'electrical_general_sub',
                question: 'Have you checked the circut breaker box?',
                user_input_id:'electrical_general_3',
                answers: [
                    'Yes',
                    'No'
                ]
              },
              {
                sub_cat: 'electrical_general_sub',
                question: 'Have you seen any sparks?',
                user_input_id:'electrical_general_4',
                answers: [
                    'Yes',
                    'No'
                ]
              },
            ],
         },
        {
            name: 'Wall damage',
            id: 'wall_general_damage_sub',
            narrower:[
              {
                    sub_cat: 'wall_general_damage_sub',
                    question: 'Is there a hole in the wall?',
                    user_input_id:'walls_general_1',
                    answers: [
                        'One',
                        'Multiple',
                        'Larger hole then a fist size',
                    ]
              },
              {
                sub_cat: 'wall_general_damage_sub',
                question: 'What material are the walls constructed with?',
                user_input_id:'walls_general_2',
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
                sub_cat: 'wall_general_damage_sub',
                question: 'What secondary material are the walls constructed with?',
                user_input_id:'walls_general_3',
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
                sub_cat: 'wall_general_damage_sub',
                question: 'What you can you see through the hole in the wall?',
                user_input_id:'walls_general_4',
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
                sub_cat: 'wall_general_damage_sub',
                question: 'What else you can you see through the hole in the wall?',
                user_input_id:'walls_general_5',
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
            name: 'Ceiling damage',
            id: 'ceiling_general_damage_sub',
            narrower:[
              {
                    sub_cat: 'ceiling_general_damage_sub',
                    question: 'Is there a hole in the ceiling?',
                    user_input_id:'ceiling_general_1',
                    answers: [
                        'One',
                        'Multiple',
                        'Larger hole then a fist size',
                    ]
              },
              {
                sub_cat: 'ceiling_general_damage_sub',
                question: 'What material is the ceiling constructed with?',
                user_input_id:'ceiling_general_2',
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
                sub_cat: 'ceiling_general_damage_sub',
                question: 'What secondary material is the ceiling constructed with?',
                user_input_id:'ceiling_general_3',
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
                sub_cat: 'ceiling_general_damage_sub',
                question: 'What you can you see through the hole in the ceiling?',
                user_input_id:'ceiling_general_4',
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
                sub_cat: 'ceiling_general_damage_sub',
                question: 'What else you can you see through the hole in the ceiling?',
                user_input_id:'ceiling_general_5',
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
    ],/* <--- Sectors End */
  };