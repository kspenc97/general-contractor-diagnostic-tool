

export const INDOOR_SECTORS = {
    //name: 'Company',
    sectors: [
      {
        name: 'Kitchen',
        id: 'kitchen_sector',
        imageClass: 'bg-kitchen-1',
        subSectors: [
          {
              name: "Stove",
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
            name: "Sink",
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