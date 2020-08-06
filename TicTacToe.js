import React from 'react';
// import Table from './Table';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';


 
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';






const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    images: {
      height: 90,
      width: 90,

    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent: "center",
    },
    cell: {
      backgroundColor: Colors.white,
      // border: 1,
      // float: left,
      fontSize: 48,
      fontWeight: '400',
      height: 34,
      paddingLeft: -1,
      paddingTop: -1,
      textAlign: "center",
      
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
      textAlign:"center"
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    game: {
      display: "flex",
      flexDirection: "row",
      width: "150%",
      height: "30%",
      
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        fontSize: 3,
        height: "350%",
        color: "#FF6347",
        padding: "10",
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    tile: {
      borderWidth: 8,
      width: 100,
      height: 100,
      borderColor: "#663399"
    }
  });

  class ResetButton extends React.Component {
    constructor(props) {
      super(props);
    }
    handleResetClickEvent() {
      alert("Reset Clicked");
      
    }
    render() {
      return (
        <View>
          <Button style= {styles.button} title = "Reset"></Button>
        </View>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function Square(props)  {
    
      return ( 
        <View style={[{width: "30%"}]}>
          <Button style = {styles.cell} onPress ={() => props.onClickEvent()} title = {"" + props.value}>
        </Button>
        </View>
        
      )
  }

  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }
    handleResetEvent() {
      alert("Reset Button was clicked Clicked")
    }
    handleClickEvent(n) {
      // alert("bye");
      const squares = this.state.squares.slice();
      if (calculateWinner(squares) || squares[n]) {
        return;
      }
      squares[n] = this.state.xIsNext ? "X" : "O";
      this.setState({squares: squares, xIsNext: !this.state.xIsNext,});
    }
    renderCell (n) {
      return <Square value = {this.state.squares[n]} 
      onClickEvent = {() => this.handleClickEvent(n)}/>;
    }
    render() {
      let status = "It is "  + (this.state.xIsNext ? "X":"O") + "'s Turn";
      const winner = calculateWinner(this.state.squares);
    
      if (winner) {
        status = 'Winner: ' + winner;
      } else{
        status = "It is "  + (this.state.xIsNext ? "X":"O") + "'s Turn";
      }
      return (
      <View>
        <Text>
          {status}
        </Text>
        <View style={styles.row}>
          {/* row 1 */}
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </View>
        <View style={styles.row}>
          {/* row 2 */}
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </View>
        <View style={styles.row}>
          {/* row 3 */}
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </View>
        {/* <ResetButton onPress = {this.handleResetEvent}/> */}
      </View>
      );
    }
  }

  class Game extends React.Component {
    render() {
      return (
        <View>
          <View>
          <Board/>
          </View>
          
      </View>
      );
      
    }
  }

  const TicTacToeFunction:() => React$Node = () => {
    // this is the new function that only renders a game.
    return <Game/>
  }

export default TicTacToeFunction;
 