import styles from "./catalog.module.css";
import imageMan from "../../images/man.svg";
import TariffWithRadioButton from "../tariff-with-radio-button/tariff-with-radio-button";
import InformationBoard from "../information-board/information-board";
import exclamationMark from "../../images/exclamation-mark.svg";
import CustomCheckbox from "../custom-checkbox/custom-checkbox";
import Button from "../button/button";
import { useEffect, useRef, useState, type FC } from "react";
import {
  ECheckboxColors,
  type TStylesCheckbox,
  type TTariff,
} from "../../utils/types";
import { useSelector } from "../../utils/additional-storage-typing";

const Catalog: FC = () => {
  const { tariffs } = useSelector((store) => store.tariffs);
  const [selectedTariffId, setSelectedTariffId] = useState<string>(
    tariffs[0]?.id ?? "",
  );
  const [errorStylesCheckbox, setErrorStylesCheckbox] =
    useState<TStylesCheckbox>({
      borderColor: ECheckboxColors.baseBorder,
      backgroundColor: ECheckboxColors.baseBackground,
    });
  useEffect(() => {
    setSelectedTariffId(tariffs[0]?.id ?? "");
  }, [tariffs]);
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function sendDataServer() {
    if (!formRef.current) return;
    const inputs = formRef.current.elements;
    const resultData: { checkedTariffId: string | null } = {
      checkedTariffId: null,
    };

    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      if (
        "name" in element &&
        "checked" in element &&
        element.name === "tariff" &&
        element.checked
      ) {
        resultData.checkedTariffId = element.id;
      }
    }

    console.log("Данные, которые отправятся на сервер", resultData);
  }
  function checkCheckbox() {
    if (!checkboxRef.current) return;

    if (!checkboxRef.current.checked) {
      setErrorStylesCheckbox({
        borderColor: ECheckboxColors.errorBorder,
        backgroundColor: ECheckboxColors.errorBackground,
      });
    } else {
      setErrorStylesCheckbox({
        borderColor: ECheckboxColors.baseBorder,
        backgroundColor: ECheckboxColors.baseBackground,
      });
      // отправляем данные на сервер
      sendDataServer();
    }
  }
  function handleTariffChange(id: string) {
    setSelectedTariffId(id);
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.header}>
        Выбери подходящий для себя{" "}
        <span className={styles.highlighting}>тариф</span>
      </h1>
      <div className={styles.mainContent}>
        <img
          src={imageMan}
          alt="Изображение мужчины"
          className={styles.imageMan}
        />
        <form action="" ref={formRef}>
          <div className={styles.containerTariffWithRadioButton}>
            {tariffs.map((tariff: TTariff) => {
              return (
                <TariffWithRadioButton
                  key={tariff.id}
                  id={tariff.id}
                  fullPrice={tariff.full_price}
                  price={tariff.price}
                  text={tariff.text}
                  // isBest={tariff.is_best}
                  needBestsellerText={tariff.is_best}
                  needLargeSize={tariff.is_best}
                  duration={tariff.period}
                  selectedTariffId={selectedTariffId}
                  onChangeRadioButton={() => handleTariffChange(tariff.id)}
                />
              );
            })}
          </div>

          <InformationBoard additionalClassName={styles.informationBoard}>
            <img src={exclamationMark} alt="" />
            <p>
              Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
              результат, чем за 1 месяц
            </p>
          </InformationBoard>
          <CustomCheckbox
            ref={checkboxRef}
            errorStylesCheckbox={errorStylesCheckbox}
          >
            Я согласен с{" "}
            <a href="#" className={styles.a}>
              офертой рекуррентных платежей
            </a>{" "}
            и{" "}
            <a href="#" className={styles.a}>
              Политикой конфиденциальности
            </a>
          </CustomCheckbox>

          <Button
            type="submit"
            needBlinking
            additionalClassName={styles.button}
            onClick={(e) => {
              e.preventDefault();
              checkCheckbox();
            }}
          >
            Купить
          </Button>
          <p className={styles.confirmText}>
            Нажимая кнопку «Купить», Пользователь соглашается на разовое
            списание денежных средств для получения пожизненного доступа к
            приложению. Пользователь соглашается, что данные кредитной/дебетовой
            карты будут сохранены для осуществления покупок дополнительных услуг
            сервиса в случае желания пользователя.
          </p>
        </form>
      </div>
      <div className={styles.guarantee}>
        <InformationBoard
          additionalClassName={styles.informationBoardGuarantee}
        >
          гарантия возврата 30 дней
        </InformationBoard>
        <p className={styles.informationBoardGuaranteeText}>
          Мы уверены, что наш план сработает для тебя и ты увидишь видимые
          результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
          деньги в течение 30 дней с момента покупки, если ты не получишь
          видимых результатов.
        </p>
      </div>
    </section>
  );
};

export default Catalog;
