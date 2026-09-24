---
title: People
date: 2024-12-23

type: landing

sections:
  - block: markdown
    content:
      title:
      subtitle: ''
      text: |
        <h1 class="internal-banner-title">Our team</h1>
    design:
      columns: '1'
      background:
        image:
          filename: internal-banner.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['0', '0', '0', '0']
      css_class: internal-page-banner

  - block: people
    content:
      title:
      user_groups:
          - Principal investigators
          - Laboratory manager
          - Postdoctoral researchers
          - PhD students
          - Undergraduates
          - Alumni
      sort_by: Params.last_name
      sort_ascending: true
    design:
      show_interests: true
      show_role: true
      show_social: true
---
