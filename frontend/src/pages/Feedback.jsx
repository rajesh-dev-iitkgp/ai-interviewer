import FeedbackHeader from "../components/Feedback/FeedbackHeader"
import QuestionFeedback from "../components/Feedback/QuestionFeedback"
import Questions from "../components/Feedback/Questions"
import { getInterviewById } from "../services/interviewService"
import { useEffect,useState,useRef } from "react"
import { useParams } from "react-router-dom"
import jsPDF from "jspdf"
import Loader from "../components/Common/Loader"

const Feedback = () => {

    const {id}= useParams()
    const [interview,setInterview]= useState(null)
    const [questions,setQuestions]=useState([])
    const [loading,setLoading]= useState(false)
    const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0)
    const pdfRef = useRef()

    useEffect(()=>{
        const fetchInterview = async ()=>{
            try {
                setLoading(true)
                const response = await getInterviewById(id)
                setInterview(response.data.interview)
                setQuestions(response.data.interview.questions)
            } catch (error) {
                console.log(error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchInterview()
    },[id])

    const handleDownloadReport = () => {

        if (!interview || !questions?.length) return;

        const pdf = new jsPDF("p", "mm", "a4");

        let y = 20;

        // Title
        pdf.setFontSize(22);
        pdf.text("Interview Feedback Report", 20, y);

        y += 15;

        const totalScore = interview.totalScore;
        const totalMarks = questions.length * 10;

        pdf.setFontSize(14);

        pdf.text(
            `Total Score: ${totalScore}/${totalMarks}`,
            20,
            y
        );

        y += 20;

        // Questions
        questions.forEach((question, index) => {

            // Add new page if content exceeds page
            if (y > 250) {
                pdf.addPage();
                y = 20;
            }

            // Question Heading
            pdf.setFontSize(16);

            pdf.text(`Question ${index + 1}`,20,y);

            y += 10;

            // Question Text
            pdf.setFontSize(12);

            const splitQuestion = pdf.splitTextToSize(question.question, 170);

            pdf.text(splitQuestion,20, y);

            y += splitQuestion.length * 7;

            // Score
            pdf.text(`Score: ${question.score}/10`,20,y);

            y += 10;

            // User Answer
            pdf.setFontSize(13);

            pdf.text("Your Answer:",20,y);

            y += 8;

            pdf.setFontSize(12);

            const splitAnswer = pdf.splitTextToSize(
                question.userAnswer || "No Answer Provided",
                170
            );

            pdf.text( splitAnswer,20,y);

            y += splitAnswer.length * 7;

            // Ideal Answer
            if (question.feedback.idealApproach) {

                y += 5;

                pdf.setFontSize(13);

                pdf.text("Ideal Answer:",20,y);

                y += 8;

                pdf.setFontSize(12);

                const splitIdealAnswer =pdf.splitTextToSize(question.feedback.idealApproach,170);

                pdf.text(splitIdealAnswer,20,y);

                y += splitIdealAnswer.length * 7;
            }

            // Strengths
            if (question.feedback.strengths?.length) {

                y += 5;

                pdf.setFontSize(13);

                pdf.text("Strengths:",20,y);

                y += 8;

                pdf.setFontSize(12);

                question.feedback.strengths.forEach((strength) => {
                    const splitStrength =pdf.splitTextToSize(`• ${strength}`,160);

                    pdf.text(splitStrength,25,y);

                    y += splitStrength.length * 7;
                });
            }

            // Weaknesses
            if (question.feedback.weaknesses?.length) {

                y += 5;

                pdf.setFontSize(13);

                pdf.text( "Weaknesses:",20,y);

                y += 8;

                pdf.setFontSize(12);

                question.feedback.weaknesses.forEach((weakness) => {

                    const splitWeakness = pdf.splitTextToSize(`• ${weakness}`,160);

                    pdf.text(splitWeakness,25,y);

                    y += splitWeakness.length * 7;
                });
            }

            y += 15;
        });

        pdf.save("Interview-Feedback.pdf");
    };

    if(loading) return <Loader />
  return (
    <div className="bg-[#f5f7fb] flex flex-col gap-4 px-4 py-2 md:px-8 md:py-4"
        ref={pdfRef}>
        <FeedbackHeader 
            totalScore={interview?.totalScore || 0}
            totalMarks={interview?.questions.length*10}
            questions={questions}
            handleDownloadReport={handleDownloadReport} />
        <div className="grid md:grid-cols-7 gap-2">
            <Questions
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex} />
            {
            questions.length > 0 && (
                <QuestionFeedback
                currentQuestion={questions[currentQuestionIndex]}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                totalQuestions={questions.length}
                />
            )
            }
        </div>
    </div>
  )
}

export default Feedback
