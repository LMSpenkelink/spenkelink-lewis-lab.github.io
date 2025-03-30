---
title: Tour
date: 2022-10-24

type: landing

sections:
  - block: slider
    content:
      slides:
        theme: white # Reveal JS theme name
      #highlight_style: github # Highlight JS theme name
      - title: 👋 Welcome to the group
        content: Take a look at what we're working on...
        align: center
        background:
          image:
            filename: lasers.jpg
            filters:
              brightness: 0.7
          position: right
          color: #000000
      - title: DNA replication at roadblocks
        content: 'What happens when the replisome encounters a roadblock? We use cryo-EM and single-molecule imaging to reveal how the human and bacterial replication systems deal with DNA damage and secondary DNA structures.'
        align: right
        background:
          image:
            filename: Replisome.png
            filters:
              brightness: 0.7
            size: 710px
            position: left
          color: #000000
        #color:rgb(0, 0, 0)
      - title: Mitochondrial DNA replication
        content: 'Mitochondria contain their own genomes — and their own replication system. We study how the mitochondrial replisome copies its genome, and we are trying to understand how mutant proteins associated with human disease affect this process.'
        color: #000000 
        align: right
        background:
          image:
            filename: mito.png
            filters:
              brightness: 0.7
            size: 900px
            position: left
          color:  #000000
        #color: rgb(0, 0, 0)
      - title: Single-molecule directed evolution
        content: 'We develop directed-evolution methods that allow for screening and selection at the single-molecule level — allowing us to evolve new molecular functions with ultra-high sensitivity. Our system combines fluorescence-based selection with DNA-encoded libraries and microfluidics to track evolution in real time, one molecule at a time.'
        align: right
        background:
          image:
            filename: smde.png
            filters:
              brightness: 1.0
            size: cover
            position: left
          color:  #000000
        #color: rgb(0, 0, 0)
      - title: Fluorescent biosensors for diagnostics
        content: 'We design biosensors that become fluorescent in response to specific biomolecules, enabling real-time detection. Our nanobody-based sensors are easily customisable and allow for rapid detection of antigens. We can adapt them to be suitable for single-molecule measurements, allowing detection down to <0.1 pg/ml.'
        align: right
        class: background-left
        background:
          image:
            filename: biosensing.png
            filters:
              brightness: 0.7
            size: contain
            position: left
          color:  #000000
        #color: rgb(0, 0, 0)
        # link:
        #  icon: graduation-cap
        #  icon_pack: fas
        #  text: Join Us
        #  url: ../contact/
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: ''
      is_fullscreen: true
      # Automatically transition through slides?
      loop: false
      # Duration of transition between slides (in ms)
      interval: 2000
---
