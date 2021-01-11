// @desc    ADD movie
// @route   POST /api/movies/seat/:id
// @access  Private/Admin
const findSeat = asyncHandler(async (req, res) => {
    const {
        A1,
        A2,
        A3,
        A4,
        A5,
        A6,
        A7,
        A8,
        B1,
        B2,
        B3,
        B4,
        B5,
        B6,
        B7,
        B8,
        C1,
        C2,
        C3,
        C4,
        C5,
        C6,
        C7,
        C8,
        D1,
        D2,
        D3,
        D4,
        D5,
        D6,
        D7,
        D8,
    } = req.body;

    const find = await Seat.findOne({ movie: req.params.id });

    if (find) {
        find.A1 = A1 || find.A1;
        find.A2 = A2 || find.A2;
        find.A3 = A3 || find.A3;
        find.A4 = A4 || find.A4;
        find.A5 = A5 || find.A5;
        find.A6 = A6 || find.A6;
        find.A7 = A7 || find.A7;
        find.A8 = A8 || find.A8;

        find.B1 = B1 || find.B1;
        find.B2 = B2 || find.B2;
        find.B3 = B3 || find.B3;
        find.B4 = B4 || find.B4;
        find.B5 = B5 || find.B5;
        find.B6 = B6 || find.B6;
        find.B7 = B7 || find.B7;
        find.B8 = B8 || find.B8;

        find.C1 = C1 || find.C1;
        find.C2 = C2 || find.C2;
        find.C3 = C3 || find.C3;
        find.C4 = C4 || find.C4;
        find.C5 = C5 || find.C5;
        find.C6 = C6 || find.C6;
        find.C7 = C7 || find.C7;
        find.C8 = C8 || find.C8;

        find.D1 = D1 || find.D1;
        find.D2 = D2 || find.D2;
        find.D3 = D3 || find.D3;
        find.D4 = D4 || find.D4;
        find.D5 = D5 || find.D5;
        find.D6 = D6 || find.D6;
        find.D7 = D7 || find.D7;
        find.D8 = D8 || find.D8;

        const updateSeat = await find.save();

        res.json(updateSeat);
    } else {
        res.status(404);
        throw new Error('Seat not found');
    }
});
