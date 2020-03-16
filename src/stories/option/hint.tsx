import React from 'react'; 
import { withKnobs, array } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteHintOption = () => {
    return (
      <div style={defaultStyle}>
        <h1>Hint</h1>
        <p>
            Summernote supports autocomplete features, hint to help typing. You can define custom hints with options. Hint options can be an object or array for multiple hints.
        </p>
        <p>
        <table className="table" style={{ border: '1px solid black'}}> 
          <thead>
            <tr>
              <th>Key</th>
              <th style={{ width: '200px'}}>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>match</td>
              <td>RegExp <code>required</code></td>
              <td>Regular expression for checking trigger pattern.</td>
            </tr>
            <tr>
              <td>search</td>
              <td>Function <code>required</code></td>
              <td>Handler for matched keyword. You can passed suggestion items with callback. First argument is keyword and second is callback.</td>
            </tr>
            <tr>
              <td>template</td>
              <td>Function <code>optional</code></td>
              <td>Item template on suggestion popover. This function get item as argument and should return String type.</td>
            </tr>      
            <tr>
              <td>content</td>
              <td>Function <code>optional</code></td>
              <td>Template function for insertion. You can switch item with node for insertion with this function. This function get item as first argument and should return Element or String.</td>
            </tr>      
          </tbody>
          </table>
        </p>
      <pre>{`
<ReactSummernoteLite id="sample" hint={{
    words: ['apple', 'orange', 'watermelon', 'lemon'],
    match: /\b(\w{1,})$/,
    search: function (keyword: string, callback: Function) {
      callback($.grep(this.words, function (item: string) {
        return item.indexOf(keyword) === 0;
      }));
    }
  }} value="sample text" placeholder="type with apple, orange, watermelon, lemon" />
      `}</pre>
        <p style={{
          border: '1px solid #ececec'
        }}>
          <ReactSummernoteLite 
            id="sample" 
            hint={{
              words: array('words', ['apple', 'orange', 'watermelon', 'lemon']),
              match: /\b(\w{1,})$/,
              search: function (keyword: string, callback: Function) {
                callback($.grep(this.words, function (item: string) {
                  return item.indexOf(keyword) === 0;
                }));
              }
            }} 
            value="sample text" 
            placeholder="type with apple, orange, watermelon, lemon" 
          />
        </p>
      </div>
    )
  }
  
  SummernoteHintOption.story = {
    name: 'hint',
    decorators: [withKnobs],
  }
  