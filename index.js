import React, { createElement, useRef, useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client'

import {minimalSetup, EditorView} from "codemirror"
import {markdown} from "@codemirror/lang-markdown"



function Hello() {
  const ref = useRef();

  useLayoutEffect(() => {
    new EditorView({
      doc: "- hello\n- react",
      extensions: [minimalSetup, markdown()],
      parent: ref.current,
    })
  }, [ref.current])

  return createElement('div', { ref }, null);
}

let parent2 = document.createElement('div')
document.body.appendChild(parent2);

const root = createRoot(parent2);
root.render(createElement(Hello, { foo: 'bar' }, null));



let parent = document.createElement('div')
document.body.appendChild(parent);

new EditorView({
  doc: "- hello\n- vanilla",
  extensions: [minimalSetup, markdown()],
  parent,
})

