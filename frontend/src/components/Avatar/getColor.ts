let getColor = (name: string) => {
    let letter = name.slice(0,1).toLowerCase()
    switch(letter) {
      case ('a'||'n') : {
          return (0)
      }
      case ('b'||'o') : {
          return (1)
      }
      case ('c'||'p') : {
        return (2)
      }
      case ('d'||'q') : {
          return (3)
      }
      case ('e'||'r') : {
        return (4)
      }
      case ('f') : {
        return (5)
      }
      case ('g'||'t') : {
        return (6)
      }
      case ('h'||'u') : {
        return (7)
      }
      case ('i'||'v') : {
        return (8)
      }
      case ('j'||'w') : {
        return (9)
      }
      case ('k'||'x') : {
        return (10)
      }
      case ('l') : {
        return (11)
      }
      case ('m'||'y') : {
        return (12)
      }
      case ('z') : {
        return (13)
      }
      case ('o') : {
        return (14)
      }
      case ('s') : {
        return (15)
      }
      case ('y') : {
        return (16)
      }
      default : {
        return (12)
      }
    }
  }

  export default getColor
