import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';

import styles from "./MessageForm.module.css";

const MessageForm = ({ submitForm }) => {

    const addMessageId = nanoid();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = values => {
        submitForm(values.addMessage);
        reset();
    };

    return (
        <form onSubmit={handleSubmit((onSubmit))}>
            <input
                {...register("addMessage", { required: "Enter your message" })}
                id={addMessageId}
                type="text"
                className={styles.inputMessage}
                placeholder="Enter your message..."
                error={errors.addMessage}
            />
            <button
                type="submit"
                className={styles.sendButton}
            >
                Send Message
            </button>
            {errors.addMessage && <p className={styles.error}>{errors.addMessage.message}</p>}
        </form>
    )
};

export default MessageForm;