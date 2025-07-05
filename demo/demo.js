const input_integer = require('..')

const input1 = input_integer({min:1, max:150})
const input2 = input_integer({min:1875, max:2025})
title = 'demo form'
subTitle = 'Please fill out the details:'

const page = document.createElement('div')

page.innerHTML = `
    <h1> ${title} </h1>
    <h2> ${subTitle} </h2>
    <h3> Enter your age </h3>
    <x></x>
    <h3> Enter your year of birth </h3>
    <y></y>
    `

page.querySelector('x').replaceWith(input1)
page.querySelector('y').replaceWith(input2)

document.body.append(page)