export const dataTests = {"userMail":"elian.lawriw@etu.univ-grenoble-alpes.fr","version":16,"mutants":[],"suites":[{"label":"Test_play","id":"5zBzMa1ZV041nFGP394j","LtestIds":["QFVT8KktykysuYExbd0U","cSNOTGrEOcb98u5zGDXB","7o6kV0OslxSLKJyuKa4V","By8JRGmfesWjsjX7pK5F"],"tests":[{"id":"QFVT8KktykysuYExbd0U","op":"play","params":[{"grid":[[],["P1"],["P2"],["P1"],[],[],[]],"turn":"P2"},1],"expect":{"success":true,"state":{"grid":[["P2"],["P1"],["P2"],["P1"],[],[],[]],"turn":"P1"}},"comment":"..."},{"params":[{"grid":[[],["P1"],[],["P1","P2","P1"],["P2"],[],[]],"turn":"P1"},0],"expect":{"reason":"no such column","success":false},"comment":"...","id":"cSNOTGrEOcb98u5zGDXB","op":"play"},{"op":"play","expect":{"reason":"no such column","success":false},"id":"7o6kV0OslxSLKJyuKa4V","params":[{"grid":[["P2","P1"],[],["P2","P1"],[],["P1"],[],[]],"turn":"P1"},8],"comment":"..."},{"id":"By8JRGmfesWjsjX7pK5F","comment":"...","params":[{"grid":[["P1","P2","P1","P2","P1","P2"],[],[],[],[],[],[]],"turn":"P1"},1],"op":"play","expect":{"reason":"column is full","success":false}}]},{"LtestIds":["yVbONFK9aoTkl0HqvCzq","rpQAnUNN8dYmtUSjxViV","2ATehpw2EjH5tF7zb3fG"],"id":"hxYQsjLObBP2QZkNGDmu","label":"test_winner","tests":[{"expect":"P1","params":[{"grid":[[],["P1","P2"],["P1","P2"],["P1","P2"],["P1"],[],[]],"turn":"P1"}],"op":"winner","id":"yVbONFK9aoTkl0HqvCzq","comment":"..."},{"comment":"...","op":"winner","params":[{"grid":[[],["P2"],[],[],["P1"],[],[]],"turn":"P1"}],"id":"rpQAnUNN8dYmtUSjxViV","expect":"no winner yet"},{"id":"2ATehpw2EjH5tF7zb3fG","comment":"...","params":[{"grid":[["P1","P2"],["P1","P2"],["P1","P2"],["P2","P2"],[],[],["P1","P1"]],"turn":"P1"}],"expect":"P2","op":"winner"}]},{"id":"xIulN2y3qzU4yBXsi4rA","LtestIds":["hj5GBxCGnsI5hbxrVFZs","AjBxjesbycYetazxHqhV","g9pA52g4lfdOpJ27Jm30","v7jXqmfAPnjvt4FYnqlM","872nG4rIjMkDcCnK88DZ","wn7J6f2inhKd6z9Z89u8","gzySkoVwEvw1eSzIFvyX","YcOZVdfkuhC5gU7Lcynq","wLx5r5g6xxf8becOyCO6"],"label":"Tests isValid état intial de jeu","tests":[{"op":"isValid","params":[{"grid":[["P1"],["P2","P1","P2","P1","P2","P1","P2","P1"],["P1","P2"],[],[],[],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"column 2 has too much tokens"},"id":"hj5GBxCGnsI5hbxrVFZs","comment":"..."},{"expect":{"valid":false,"reason":"column 3 has too much tokens"},"id":"AjBxjesbycYetazxHqhV","comment":"...","op":"isValid","params":[{"grid":[[],[],["P1","P2","P1","P2","P1","P2","P1","P2","P1","P2"],["P2","P1"],["P1","P2","P1","P2","P1","P2","P1"],["P1","P2","P1","P2"],[]],"turn":"P1"}]},{"params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid","id":"g9pA52g4lfdOpJ27Jm30","comment":"...","expect":{"valid":false,"reason":"column 1 has too much tokens"}},{"id":"v7jXqmfAPnjvt4FYnqlM","op":"isValid","comment":"...","params":[{"grid":[[],[],[],["P1","P2","P1","P2","P1","P2","P1","P2","P1"],[],[],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"column 4 has too much tokens"}},{"id":"872nG4rIjMkDcCnK88DZ","expect":{"reason":"column 5 has too much tokens","valid":false},"params":[{"grid":[[],[],[],[],["P1","P2","P1","P2","P1","P2","P1","P2","P1","P2","P1","P2","P1"],[],[]],"turn":"P1"}],"op":"isValid","comment":"..."},{"comment":"...","op":"isValid","expect":{"reason":"column 6 has too much tokens","valid":false},"params":[{"grid":[[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1","P2","P1","P2","P1","P2"],[]],"turn":"P1"}],"id":"wn7J6f2inhKd6z9Z89u8"},{"id":"gzySkoVwEvw1eSzIFvyX","op":"isValid","comment":"...","expect":{"reason":"column 7 has too much tokens","valid":false},"params":[{"grid":[[],[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1","P2"]],"turn":"P1"}]},{"id":"YcOZVdfkuhC5gU7Lcynq","expect":{"reason":"not the turn of P1","valid":false},"op":"isValid","params":[{"grid":[[],[],[],[],["P1"],[],[]],"turn":"P1"}],"comment":"..."},{"params":[{"grid":[[],[],[],[],["P1","P2"],[],[]],"turn":"P2"}],"op":"isValid","id":"wLx5r5g6xxf8becOyCO6","expect":{"valid":false,"reason":"not the turn of P2"},"comment":"..."}]}],"canObserveString":"[]","canObserve":"[]","evals":[-1,{"winner":[0,0],"play":[0,0],"isValid":[0,0]},{"isValid":[0,0],"play":[0,0],"winner":[0,0]}]}