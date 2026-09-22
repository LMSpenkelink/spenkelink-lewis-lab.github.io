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
