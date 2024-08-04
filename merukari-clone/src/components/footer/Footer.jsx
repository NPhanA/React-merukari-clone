import {
  Camera,
  Facebook,
  Home,
  NotificationAdd,
  Person,
} from "@mui/icons-material";
import DropDownButton from "../DropDownButton";
import XIcon from "@mui/icons-material/X";
function Footer() {
  const dropDownInfoArray = [
    "会社概要（運営会社)",
    "採用情報",
    "プレスリリース",
    "公式ブログ",
    "プレスキット",
    "メルカリUS",
    "メルカリShops",
    "メルカリShops会社概要(運営会社)",
    "メルカリShopsプレスリリース",
  ];
  const dropDownHelpArray = [
    "ヘルプセンター（ガイド・お問い合わせ)",
    "メルカリShops出店者向けガイド",
    "問い合わせ一覧",
    "フリーワードから商品をさがす",
  ];
  const dropDownPrivacyArray = [
    "プライバシーポリシー",
    "外部送信ポリシー",
    "メルカリ利用規約",
    "メルカリShops利用規約",
    "メルペイ利用規約",
    "メルカード利用規約",
    "メルペイスマートマネー利用規約",
    "メルペイスマートマネープライバシーポリシー",
    "メルカリアンバサダー利用規約",
    "電磁交付規約",
    "コンプライアンスポリシー",
    "個人データの安全管理に係る基本方針",
    "特定商取引に関する表記",
    "資金決済法に基づく表示",
    "法令順守と犯罪抑止のために",
    "メルカリあんしん・あんぜん宣言！",
    "偽ブランド品撲滅への取り組み",
  ];
  return (
    <footer className="w-full h-auto relative mb-16 lg:mb-0">
      <div className="w-full bg-[#2d2d2d] p-6 lg:flex lg:justify-start">
        <DropDownButton title="メルカリについて" texts={dropDownInfoArray} />
        <DropDownButton title="ヘルプ" texts={dropDownHelpArray} />
        <DropDownButton
          title="プライバシーと利用規約"
          texts={dropDownPrivacyArray}
        />
      </div>
      <div className="w-full">
        <div className="w-full bg-[#2d2d2d] border-t-3 border-[#2d2d2d] border-solid p-6 flex items-center text-white gap-3">
          <div className="">
            <XIcon fontSize="large"></XIcon>
            <Facebook fontSize="large" />
          </div>
          <div className="">
            <span className="text-sm">© Mercari, INC.</span>
          </div>
        </div>
      </div>
      <div className="fixed w-full bottom-0 h-[56px] bg-[#2d2d2d] lg:hidden">
        <div className="w-full h-full flex">
          <div className="w-1/4 h-full text-white flex-col text-center">
            <Home />
            <p>ホーム</p>
          </div>
          <div className="w-1/4 h-full text-white flex-col text-center">
            <NotificationAdd />
            <p>お知らせ</p>
          </div>
          <div className="w-1/4 h-full text-white flex-col text-center">
            <Camera />
            <p>出品</p>
          </div>
          <div className="w-1/4 h-full text-white flex-col text-center">
            <Person />
            <p>マイページ</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
