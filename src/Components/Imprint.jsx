import Container from "./Container";

const Imprint = () => {
    return (
        <Container >
            <div className="md:mx-52 leading-relaxed font-sans mt-2 animate-slideUp transition-all ">
                <h1 className="text-[64px] font-bold">Imprint</h1>

                <p className="text-[16px] my-10 font-semibold text-sm">
                    The operator of the website bring-express.com is
                </p>
                <div className="mb-4">
                    <p className="text-sm font-normal">bring Express GmbH</p>
                    <p className="text-sm ">

                        Erich-Kästner-Str. 29, D-48485 Neuenkirchen
                    </p>
                </div>

                <p className="text-sm font-semibold">T. 030 39 88 11 00 </p>
                <p className="text-sm font-semibold ">F. +49 - (0) 30/30 88 24 25</p>
                <div className="mt-2 mb-2 text-sm">

                    <a href="" className="underline text-blue-700 text-[12px] font-semibold">support@bring-express.com</a>
                    <br />
                    <a href="" className="underline text-blue-800 text-[12px] font-semibold">www.bring-express.com </a>
                </div>
                <div className="font-semibold text-[14px]">
                    <p>
                        St.-Nr. 29/241/30700 <br /> VAT ID: DE334899446 <br /> Amtsgericht
                        Steinfurt HRB 14930 <br />
                        Verantwortlicher i. S. v. § 55 Abs. 2 RStV: Founder & CEO: Alicja
                        Borowska
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Imprint;
