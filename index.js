

function getFirstSelector(selector) {
  let element = document.querySelector(selector)
  return element
}


function nestedTarget() {
   return document.querySelector( '#nested .target' )
}


function increaseRankBy(n) {
//  let rankedLists = document.querySelectorAll( '.ranked-list li' )

//  for (let i = 0; i < rankedLists.length; i++) {
//    rankedLists[i].innerText = parseInt(rankedLists[i].innerText) + n
//  }

  const rankedLists = document.querySelectorAll( '.ranked-list' )
  const firstList = rankedLists[ 0 ]
  const secondList = rankedLists[ 1 ]

  let children = firstList.children
  let start = 1

  for ( let i = 0, l = children.length; i < l; i++ ) {
     children[ i ].innerHTML = start + i + n
  }

  children = secondList.children
  start = 12

  for ( let i = 0, l = children.length; i < l; i++ ) {
     children[ i ].innerHTML = start - i + n
  }
}

function deepestChild() {

  let theNests = document.querySelector( '#grand-node' ).querySelectorAll('div')
  var dChild

  for ( let i = 0, l = theNests.length; i < l; i++ ) {
    debugger
     var t = i + 1
     if (t === theNests.length) {
       dChild = theNests[i]
     }
  }

  return dChild

}
