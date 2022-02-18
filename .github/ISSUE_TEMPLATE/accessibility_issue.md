---
name: Accessibility issue
about: Create an issue that is automatically attached to the WCAG 2.1 AA Tracking Issue
title: '[Accessibility]: '
labels: ['accessibility', 'wcag/2.1/fixing', 'estimate/3d']
assignees: ''
body:
  - type: markdown
    attributes:
      value: |
        Thanks for your contribution to the accessibility of Sourcegraph! Please note that this issue has been automatically given an estimate of **3 days**. You can modify this estimate by changing the label from "estimate/3d" to "estimate/Xd" where X is the number of days.
  - type: textarea
    id: problem-description
    attributes:
      label: Problem description
      description: Please describe the issue is as much detail as possible
    validations:
      required: true
  - type: textarea
    id: solution-description
    attributes:
      label: Expected behavior
      description: Please describe the expected behavior
    validations:
      required: true
  - type: textarea
    id: additional-details
    attributes:
      label: Additional details
      description: Notes and/or screenshot describing the problem, details how to replicate, etc
    validations:
      required: false