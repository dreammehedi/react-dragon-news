import Marquee from "react-fast-marquee";
import Button from "../../sharedComponents/Button";
function BreakingNews() {
  return (
    <div className="flex justify-start gap-3 p-2 bg-dark-7 items-center">
      <Button name="Latest" cls={"bg-primary"}></Button>
      <Marquee
        className="text-dark-2 font-semibold text-base md:text-[18px] cursor-pointer"
        pauseOnHover="true"
        speed={70}
      >
        Delhi Capitals saw Kolkata Knight Riders score 272 runs in the Indian
        Premier League (IPL) on Wednesday in their home fixture in
        Visakhapatnam. They eventually lost by a staggering 106 runs . If that
        mauling wasn’t enough, DC and their captain Rishabh Pant have been
        handed heavy fines by the BCCI for breaching the IPL Code of Conduct.DC
        were found to have maintained a slow over rate for the second match in a
        row in IPL 2024. Their second over rate offence qualifies as a Code of
        Conduct breach and punishment has been handed out accordingly. “Rishabh
        Pant, the Delhi Capitals captain, has been fined after his team
        maintained a slow over rate during their TATA Indian Premier League
        (IPL) 2024 match against Kolkata Knight Riders at the Dr YS Rajasekhara
        Reddy ACA-VDCA Cricket Stadium, Visakhapatnam on April 3,” BCCI said in
        a release.
      </Marquee>
    </div>
  );
}

export default BreakingNews;
