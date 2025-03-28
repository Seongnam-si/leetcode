/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let result = 0;

    const bfs = (x, y) => {
        const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const queue = [[x, y]];
        grid[x][y] = "0";

        while (queue.length > 0) {
            const [row, col] = queue.shift();
            
            for (const [dr, dc] of direction) {
                const nr = row + dr;
                const nc = col + dc;
                if (
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    grid[nr][nc] === '1'
                ) {
                    queue.push([nr, nc]);
                    grid[nr][nc] = '0';
                }
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                result += 1;
                bfs(i,j);
            }
        }
    }

    return result;
};
