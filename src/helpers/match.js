export function match(state, player, name) {
    state[name] = player;
    if(
        (state.topLeft === player && state.topCenter === player && state.topRight === player)
        ||
        (state.centerLeft === player && state.center === player && state.centerRight === player)
        ||
        (state.bottomLeft === player && state.bottomCenter === player && state.bottomRight === player)
        ||
        (state.topLeft === player && state.centerLeft === player && state.bottomLeft === player)
        ||
        (state.topCenter === player && state.center === player && state.bottomCenter === player)
        ||
        (state.topRight === player && state.centerRight === player && state.bottomRight === player)
        ||
        (state.topLeft === player && state.center === player && state.bottomRight === player)
        ||
        (state.topRight === player && state.center === player && state.bottomLeft === player)
    ) {
        return true;
    }
    return false;
}