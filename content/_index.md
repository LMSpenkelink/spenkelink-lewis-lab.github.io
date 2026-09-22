---
# Leave the homepage title empty to use the site title
title:
date: 2024-12-23
type: landing

sections:
  - block: hero
    content:
      title: |
        Spenkelink & Lewis
        labs
      image:
        filename: pretty.jpg
      text: |
        <br>
        
        The **Spenkelink & Lewis labs** aim to develop new visual biochemistry tools to study dynamic biological processes, one at a time and with near-atomic resolution.
  
  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: showcase
      flip_alt_rows: true
    #  columns: '2'

      - block: markdown
    content:
      title: Our Research
      subtitle: ''
      text: |
        <div class="research-grid">

          <div class="research-card">
            <img src="/media/Replisome.png" alt="DNA replication at roadblocks">
            <div class="research-card-content">
              <h3>DNA replication at roadblocks</h3>
              <p>We use cryo-EM and single-molecule imaging to reveal how human and bacterial replisomes overcome DNA damage and secondary DNA structures.</p>
            </div>
          </div>

          <div class="research-card">
            <img src="/media/mito.png" alt="Mitochondrial DNA replication">
            <div class="research-card-content">
              <h3>Mitochondrial DNA replication</h3>
              <p>We study how the mitochondrial replisome copies its genome and how disease-associated mutant proteins affect this process.</p>
            </div>
          </div>

          <div class="research-card">
            <img src="/media/smde.png" alt="Single-molecule directed evolution">
            <div class="research-card-content">
              <h3>Single-molecule directed evolution</h3>
              <p>We develop methods for screening and selection at the single-molecule level to evolve new molecular functions with ultra-high sensitivity.</p>
            </div>
          </div>

          <div class="research-card">
            <img src="/media/biosensing.png" alt="Fluorescent biosensors for diagnostics">
            <div class="research-card-content">
              <h3>Fluorescent biosensors for diagnostics</h3>
              <p>We design customisable fluorescent biosensors for rapid, highly sensitive detection of specific biomolecules.</p>
            </div>
          </div>

        </div>
    design:
      columns: '1'
  

  - block: collection
    content:
      title: Latest Papers
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article'
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: lasers.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen    

  #- block: markdown
  #  content:
  #    title:
  #    subtitle:
  #    text: |
  #      {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
  #  design:
  #    columns: '1'
---
